import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

const ChatInput: React.FC = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "20px";

      const maxHeight = 300;
      const newHeight = Math.min(textarea.scrollHeight, maxHeight);
      textarea.style.height = `${newHeight}px`;
    }
  }, [text]);

  const sendMessage = async () => {
    if (!text.trim()) return; // Prevent sending empty messages

    const apiEndpoint = "http://127.0.0.1:5000/api/v1/process_message"; // Replace with your actual API endpoint
    const payload = {
      message: text,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle success
      console.log("Message sent:", text);
      setText(""); // Clear the textarea
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        gap: "8px",
        borderRadius: "7px",
        border: "2px solid #262a39",
        backgroundColor: "#181b26",
        maxHeight: "300px",
        resize: "none",
        overflow: "hidden",
      }}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask anything..."
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: "16px",
          color: "white",
          resize: "none",
          overflowY: "scroll",
          maxHeight: "300px",
          width: "calc(100% - 40px)",
          boxSizing: "border-box",
          backgroundColor: "transparent",
          outline: "none",
          border: "none",
        }}
      />
      <Button
        initialColor="#0ba12d"
        hoverColor="#0e5124"
        text="^"
        width="40px"
        send={sendMessage} // Add the onClick event handler here
      ></Button>
    </div>
  );
};

export default ChatInput;
