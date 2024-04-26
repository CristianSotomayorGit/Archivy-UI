import React from "react";
import "./Login.css";
import Header from "./Header";
import DialogBox from "./DialogBox";
import LoginForm from "./LoginForm";

const title = "Log In";
const content = LoginForm;

const Login: React.FC = () => {
  return (
    <div>
      <head>
        <title>Log in</title>
        <link rel="stylesheet" type="text/css" href="../static/css/login.css" />
      </head>
      <html>
        <body>
          <div className="app">
            <Header logoSrc="" logoAlt="Archivy" mainButtonTitle ={'Register'} mainButtonUrl={'/register'}></Header>
            <div className="body">
              <DialogBox title={title} Content={content}></DialogBox>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};

export default Login;
