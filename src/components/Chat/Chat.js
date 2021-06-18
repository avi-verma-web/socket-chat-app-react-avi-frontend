import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import Info from "../Info/Info";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextC from "../TextC/TextC";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://chat-app-socket-avinash.herokuapp.com/";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("d");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <Info room={room}></Info>
        <Messages messages={messages} name={name}></Messages>
        <Input
          setMessage={setMessage}
          sendMessage={sendMessage}
          message={message}
        ></Input>
      </div>
      <TextC users={users}></TextC>
    </div>
  );
};

export default Chat;
