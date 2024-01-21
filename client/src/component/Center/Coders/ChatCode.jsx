import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Logo from "../../Logo";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "Access-Control-Allow-Origin": "http://localhost:5000",
  },
});
const ChatCode = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("chat history", (history) => {
      setMessages(history);
    });

    return () => {
      socket.off("chat message");
      socket.off("chat history");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("chat message", { user, message: messageInput });

    setMessages((prevMessages) => [
      ...prevMessages,
      { user, message: messageInput },
    ]);
    setMessageInput("");
  };

  return (
    <div className="h-[110vh]">
      <div className="flex items-center justify-between ">
        <Logo />
        <p className="text-center text-[2rem] font-mono">
          For innovation💡, suggestion😉 and help ✅
        </p>
        <div></div>
      </div>
      <div className="mx-[20vh] my-[5vh] shadow-2xl">
        <p></p>
        <div className="chat h-[70vh] overflow-scroll">
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.user === user ? "my-mess" : "other-mess"}
            >
              <strong className="text-right">{message.user}:</strong>{" "}
              {message.message}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-1 justify-center mt-[-1rem] ">
        <input
          type="text"
          placeholder="Your Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-[33%] rounded-full p-1 shadow-md  "
        />
        <input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="w-[33%] rounded-full p-1 shadow-md"
        />
        <button
          className="w-[10%] bg-green-300 rounded-full shadow-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatCode;
