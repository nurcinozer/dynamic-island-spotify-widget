import { useCallback } from "react";
import { useSpotifyContext } from "./context";
import { useSpotifyApi } from "./hooks/useSpotifyApi";

export const App = () => {
  const { getRecentlyPlayed } = useSpotifyApi();
  const { setRecentlyPlayedItem, recentlyPlayedItem } = useSpotifyContext();

  const handleGetRecentlyPlayed = useCallback(async () => {
    const data = await getRecentlyPlayed();
    setRecentlyPlayedItem(data.items[0].track.name);
  }, [getRecentlyPlayed, setRecentlyPlayedItem]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{recentlyPlayedItem}</p>
        <button onClick={handleGetRecentlyPlayed}>Get recently played</button>
      </header>
    </div>
  );
};
