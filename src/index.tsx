import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import {animals} from "./moks/animals"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
    {/* animals = {animals}; */}
  </React.StrictMode>
);
