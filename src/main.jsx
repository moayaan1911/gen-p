import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./Navbar";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Toaster></Toaster>
    <Analytics />
  </React.StrictMode>
);
