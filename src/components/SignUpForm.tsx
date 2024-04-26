import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
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
      const response = await fetch("http://127.0.0.1:5000/register", {
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

  // Destructure formData for easier usage
  const { firstName, lastName, email, username, password } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="First Name"
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          placeholder="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          placeholder="Username"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginTop: "16px", marginBottom: "16px" }}>
        <label style={{ color: "white", display: "flex" }}>
          <input
            id="terms"
            required={false}
            type="checkbox"
            style={{ height: "15px", width: "15px", marginRight: "15px" }}
          ></input>
          <p style={{ margin: "0" }}>
            I agree to the{" "}
            <a href="/terms" target="_blank">
              Terms of Service{" "}
            </a>
            and{" "}
            <a href="/privacy" target="_blank">
              Privacy Policy
            </a>
          </p>
        </label>
      </div>
      <Button initialColor="#0ba12d" hoverColor="#0e5124" text="Sign Up" />
      <p style={{ color: "white" }}>
        Already have an account? <a href="/register">Login</a>
      </p>
    </form>
  );
};

export default SignUpForm;
