import { Server } from "socket.io";
import { Router } from "express";
const questions = Router();
import { createServer } from "http"
const httpServer = createServer()
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000/questions"
    }
});

io.on("connection", (socket) => {
    socket.on("send-message", data => {
        io.emit("client-message", data)
    })
});

httpServer.listen(5001)
export default questions;

