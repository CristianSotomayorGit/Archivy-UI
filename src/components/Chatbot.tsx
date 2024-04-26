import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button";
import ChatInput from "./ChatInput";

const ChatBot: React.FC = () => {
  //   async function sendMessage() {
  //     const chatInputField = document.getElementById("inputFieldValue");
  //     const chatMessages = document.querySelector(".chat-messages");

  //     if (chatInputField) {
  //       const message = chatInputField.innerText;
  //       console.log(message);
  //     }

  //     const selectedTextElement = document.querySelector(".selected-text");
  //     const selectedText = selectedTextElement
  //       ? selectedTextElement.textContent
  //       : "";

  //     if (message.trim() !== "" || selectedText.trim() !== "") {
  //       const messageContainer = document.createElement("div");
  //       messageContainer.classList.add("chatMessageContainer");

  //       const messageElement = document.createElement("div");
  //       messageElement.classList.add("chatMessage", "user-message");

  //       messageElement.textContent =
  //         message +
  //         (selectedText ? " [Selected text: " + selectedText + "]" : "");

  //       chatMessages.appendChild(messageContainer);

  //       const messageContainers = document.querySelectorAll(
  //         ".chatMessageContainer"
  //       );
  //       const lastMessageContainer =
  //         messageContainers[messageContainers.length - 1];
  //       lastMessageContainer.appendChild(messageElement);

  //       const loadingElement = document.createElement("div");
  //       loadingElement.setAttribute("id", "loadingMessage");
  //       loadingElement.setAttribute("style", "display: none;");
  //       loadingElement.setAttribute("class", "simpleText");
  //       loadingElement.textContent = "Thinking";

  //       const innerLoadingelement = document.createElement("span");
  //       innerLoadingelement.setAttribute("id", "dots");

  //       loadingElement.appendChild(innerLoadingelement);

  //       lastMessageContainer.appendChild(loadingElement);

  //       chatInputField.value = "";
  //       chatMessages.scrollTop = chatMessages.scrollHeight;
  //     }

  //     if (message.trim() !== "" || selectedText.trim() !== "") {
  //       // Send message and selected text to server
  //       const response = await fetch("/process_message", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ message, selectedText }),
  //       });
  //     }
  //   }

  const [formData, setFormData] = useState({
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(JSON.stringify(formData));

      const response = await fetch("http://127.0.0.1:5000/process_message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // User created successfully
        console.log("User created successfully");
      } else {
        // Handle error response
        console.error("Error creating user");
      }
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  const { message } = formData;

  return (
    <div id="chatBot">
      <div className="chat-messages" id="messages">
        <div className="chatMessageContainer">
          <div className="systemPrompt">
            <div className="messageContainer">
              <div className="messageContent">
                <pre style={{ fontWeight: "bold" }} className="plainText">
                  Hi, I'm here to assist you with your construction project. You
                  can ask me anything regarding building codes.
                </pre>
                <p style={{ fontStyle: "italic", marginBottom: "0px;" }}>
                  {" "}
                  Archivy can make mistakes. Consider checking important
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="chatMessageContainer"></div>
        <div className="chatMessageContainer"></div>
        <div className="chatMessageContainer">
          <div className="airesponse sections">Sources:</div>
        </div>
      </div>
      <ChatInput />
      {/* <div id="inputField" style={{ padding: "10px" }}>
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Ask a question"
              type="text"
              id="inputFieldValue"
              name="message"
              value={message}
              onChange={handleInputChange}
            />
          </div>
          <Button initialColor="#0ba12d" hoverColor="#0e5124" text="Send" />
        </form>
      </div> */}
    </div>
  );
};

export default ChatBot;
