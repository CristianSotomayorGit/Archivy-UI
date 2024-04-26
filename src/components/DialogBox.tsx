import React, { useState } from "react";

interface DialogBoxProps {
  title: string;
  Content: React.FC;
}

const DialogBox: React.FC<DialogBoxProps> = ({ title, Content }) => {
  //   const [color, setColor] = useState<string>(initialColor);

  return (
    <div
      id="signUp-Box"
      style={
        {
          background: "#181b26",
          padding: "25px",
          border: "2px solid #262a39",
          borderRadius: "7px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }
        //   @media screen and (max-width: 600px) {
        //     #signUp-Box {
        //       width: 350px !important;
        //     }
      }
    >
      <h1
        style={{
          color: "white",
          fontSize: "2.2rem",
          fontFamily:
            "warnock-pro, Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif",
        }}
      >
        {title}
      </h1>
      <div className="Content">
        <Content />
        {/* <form> */}
        {/* <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value="">
        </div>
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value="">
        </div>
            <button type="submit">Login</button>
         </form> */}
      </div>
    </div>
  );
};

export default DialogBox;
