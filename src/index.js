import "./styles.css";
import React from "react";
import * as ReactDom from "react-dom/client";
import { Home } from "./app/Home";

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(<Home />);
