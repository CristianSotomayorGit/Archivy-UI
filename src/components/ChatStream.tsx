import React, { useState, useEffect } from "react";
// import axios from 'axios';

const ChatStream: React.FC = () => {
  const [messages, setMessages] = useState<string>("");

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/stream_chat");

    eventSource.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      setMessages((prev) => prev + newMessage.choices[0].delta?.content);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <textarea
      style={{ width: "100%", height: "200px", resize: "none" }}
      value={messages}
      readOnly
    />
  );
};

export default ChatStream;
