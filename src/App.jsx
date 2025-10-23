import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Component/Body";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Resetpassword from "./Component/Resetpassword";
import { Toaster } from "react-hot-toast";
import Nav from "./Component/Nav";
import Project from "./Component/Project";

function App() {
  return (
    <Router>
      <Toaster
        position="top-center" // 👈 toast in the center
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "linear-gradient(to right, #2563eb, #14b8a6, #22c55e)", // blue → teal → green gradient
            color: "white",
            fontWeight: "600",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            padding: "12px 18px",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "white",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Body></Body>} />

        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/resetpass" element={<Resetpassword></Resetpassword>}></Route>
        <Route path="/myproject" element={<Project></Project>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
