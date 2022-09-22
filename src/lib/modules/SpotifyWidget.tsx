import { SpotifyContextProvider } from "../context";
import { SpotifyIsland } from "./SpotifyIsland";
import "../styles/index.css";

export const SpotifyWidget: React.FC = () => {
  return (
    <SpotifyContextProvider>
      <SpotifyIsland />
    </SpotifyContextProvider>
  );
};
