import React from "react";
import ReactDOM from "react-dom/client";
import { SpotifyWidget } from "./lib/modules";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SpotifyWidget />
  </React.StrictMode>
);
