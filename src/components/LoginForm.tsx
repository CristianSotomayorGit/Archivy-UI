import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Function to update state based on form input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  interface LoginResponse {
    token: string; // Example property, adjust based on actual response
    // Add other properties as needed
  }

  const login = async (
    username: string,
    password: string
  ): Promise<LoginResponse> => {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data: LoginResponse = await response.json(); // Cast the response to the LoginResponse interface
    return data;
  };

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Submitting", { username, password });
    // Usage

    login(username, password)
      .then((data) => {
        console.log("Login successful", data);
      })
      .catch((error) => {
        console.error("Login error", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button initialColor="#0ba12d" hoverColor="#0e5124" text="Login" />
      <p style={{ color: "white" }}>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </form>
  );
};

export default LoginForm;
