import React from "react";
import "./Code.css";
import Header from "./Header";
import Chatbot from "./Chatbot";
import CodeExplorer from "./CodeExplorer";
import AIWarning from "./AIWarning";

const Code: React.FC = () => {
  return (
    <div>
      <AIWarning />
      <div className="app">
        <Header mainButtonTitle="Register" mainButtonUrl="/register"/>
        <div className="body">
          <CodeExplorer />
          <Chatbot />
        </div>
      </div>
      <div>Made with dedication by http://sotomayor.dev</div>
    </div>
  );
};

export default Code;
