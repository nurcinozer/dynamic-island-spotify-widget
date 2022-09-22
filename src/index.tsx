import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SpotifyContextProvider } from "./context";
import { SpotifyIsland } from "./SpotifyIsland";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SpotifyContextProvider>
      <SpotifyIsland />
    </SpotifyContextProvider>
  </React.StrictMode>
);
