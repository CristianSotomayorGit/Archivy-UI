import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Code from "./components/Code";
import Login from "./components/Login";
import Register from "./components/Register";
import Button from "./components/Button";
import ChatStream from "./components/ChatStream";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Code} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/example" Component={ChatStream} />
      </Routes>
    </Router>
  );
}

export default App;
