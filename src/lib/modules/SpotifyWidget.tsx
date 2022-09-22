import { SpotifyContextProvider } from "../context";
import { SpotifyIsland, SpotifyIslandProps } from "./SpotifyIsland";
import "../styles/index.css";

export const SpotifyWidget: React.FC<SpotifyIslandProps> = ({
  position = "default",
}) => {
  return (
    <SpotifyContextProvider>
      <SpotifyIsland position={position} />
    </SpotifyContextProvider>
  );
};
