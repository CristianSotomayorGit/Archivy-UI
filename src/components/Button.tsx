import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  initialColor: string;
  hoverColor: string;
  text: string;
  width?: string;
  url?: string;
  send?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  initialColor,
  hoverColor,
  text,
  width,
  send,
  url,
}) => {
  const [color, setColor] = useState<string>(initialColor);

  const navigate = useNavigate();

  var handleClick;

  if (!url) {
    handleClick = send;
  } 
  else {
    handleClick = () => {
      navigate(url);
    };
  }

  return (
    <button
      style={{
        backgroundColor: color,
        transition: "background-color 0.3s",
        marginBottom: "0px",
        // maxWidth: "100px",
        maxHeight: "40px",
        borderRadius: "5px",
        border: "1px solid #262a39",
        color: "white",
        cursor: "pointer",
        minHeight: "40px",
        minWidth: width || "100px",
      }}
      onMouseEnter={() => setColor(hoverColor)}
      onMouseLeave={() => setColor(initialColor)}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
