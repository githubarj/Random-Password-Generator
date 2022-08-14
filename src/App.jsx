import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <Navbar />
      
    </div>
  );
}
