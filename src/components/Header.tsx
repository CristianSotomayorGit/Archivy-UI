import React from "react";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  mainButtonTitle: string;
  mainButtonUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt,mainButtonTitle, mainButtonUrl }) => {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopColor: "green",
        borderBottom: "2px solid #262a39",
        backgroundColor: "#181b26",
        borderTop: "4px solid #05e132ad",
        height: "55px",
        paddingRight: "30px",
        paddingLeft: "30px",
      }}
    >
      <div className="logo">
        <a
          href='/'
          id="title"
          style={{
            textDecoration: "none",
            color: "#05e132ad",
            fontFamily: "TimesNewRoman",
            fontStyle: "lighter",
            fontSize: "25px",
          }}
        >
          Archivy
        </a>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ display: "flex" }}>
          <Button
            initialColor="#2b3044"
            hoverColor="#181b26"
            text="Learn More"
            url= '/'
          ></Button>
          <Button
            initialColor="#0ba12d"
            hoverColor="#0e5124"
            text={mainButtonTitle}
            url={mainButtonUrl}

          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
