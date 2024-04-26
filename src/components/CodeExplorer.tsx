import React, { useState } from "react";

interface ButtonProps {
  initialColor?: string;
  hoverColor?: string;
  text?: string;
}

const ChatBot: React.FC<ButtonProps> = ({ initialColor, hoverColor, text }) => {
  //   const [color, setColor] = useState<string>(initialColor);

  return (
    <div id="codeExplorer">
      <div className="innercodeExplorer">
        <div className="sidebar">
          <iframe
            className="sideBariFrame"
            src="{{ url_for('iframe', filename='bookmarks.html') }}"
          ></iframe>
        </div>
        <div className="codeContainer">
          <div className="collapseContainer">
            <button className="toggle-btn"></button>
          </div>
          <iframe
            className="codeContentiFrame"
            src="{{ url_for('iframe', filename='content.html') }}"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
