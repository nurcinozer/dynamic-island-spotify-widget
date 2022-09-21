import { useCallback } from "react";
import { useSpotifyApi } from "./hooks/useSpotifyApi";

export const App = () => {
  const { recentlyPlayedItem, getRecentlyPlayed } = useSpotifyApi();

  const handleClick = useCallback(() => {
    getRecentlyPlayed();
  }, [getRecentlyPlayed]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{recentlyPlayedItem}</p>
        <button onClick={handleClick}>Get recently played</button>
      </header>
    </div>
  );
};
