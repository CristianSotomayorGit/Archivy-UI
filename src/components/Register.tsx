import React from "react";
import "./Login.css";
import SignUpForm from "./SignUpForm";
import DialogBox from "./DialogBox";
import Header from "./Header";

const title = "Sign Up";
const signUpForm = SignUpForm;

const Register: React.FC = () => {
  return (
    <div>
      <head>
        <title>Register</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="../static/css/register.css"
        />
      </head>
      <html>
        <body>
          <div className="app">
            <Header mainButtonTitle="Login" mainButtonUrl="/login"></Header>
            <div className="body">
              <DialogBox title={title} Content={signUpForm}></DialogBox>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
};

export default Register;
