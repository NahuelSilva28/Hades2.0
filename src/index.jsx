import React from "react";
import ReactDOMClient from "react-dom/client";
import { AdminHome } from "./screens/AdminHome";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AdminHome />);
