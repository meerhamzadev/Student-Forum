import React from 'react'

const MessageBody = ({ data }) => {

    return (
        <>
            {React.Children.toArray(data.map(itemData => (
                <section className="messagebody">
                    <h1 className="messagebody__text" >{itemData.message}</h1>
                    <ul className="messagebody__tags">
                        {React.Children.toArray(itemData.tags.map(tag => (
                            tag ? <li>{`#${tag}`}</li> : <></>
                        )))}
                    </ul>
                </section>)
            ))}
        </>

    )
}

export default MessageBody