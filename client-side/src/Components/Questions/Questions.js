import React, { useState } from 'react'
import { io } from "socket.io-client";
import Navbar from '../NavBar/Navbar';
import MessageBody from './ChildComponent/MessageBody';

const Questions = () => {
    const [data, setData] = useState([])

    const socket = io("http://localhost:5001")
    socket.on("connect", () => {
        console.log('Im connected');
    })

    socket.on("client-message", clientData => {
        console.log(clientData)
        const dataList = [...data]
        dataList.push({
            message: clientData.message,
            tags: [...clientData.tags]
        })
        setData(dataList)
    })

    const getMessageData = e => {
        e.preventDefault();

        const dataList = [...data];
        dataList.push({
            message: e.target.message.value,
            tags: [...e.target.tags.value.split(',')]
        })
        socket.emit("send-message", {
            message: e.target.message.value,
            tags: [...e.target.tags.value.split(',')]
        })
        setData(dataList)
        e.target.message.value = ""
        e.target.tags.value = ""
    }

    return (
        <section className="questions">
            <Navbar isLoggedIn={true} />
            <div className="questions__message-screen">
                <MessageBody data={data} />
            </div>
            <form className="questions__form" onSubmit={getMessageData}>
                <input type="text" name="message" placeholder="Enter text here" draggable="false" />
                <input type="text" name="tags" placeholder="Enter tags in comma separated format" />
                <button className="questions__form__button" type="submit">Post</button>
            </form>
        </section>
    )
}

export default Questions
