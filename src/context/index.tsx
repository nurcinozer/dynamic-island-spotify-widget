import { createContext, useContext, useState } from "react";

type SpotifyContextType = {
  recentlyPlayedItem: string;
  setRecentlyPlayedItem: (item: string) => void;
};

const DEFAULT_SPOTIFY_CONTEXT: SpotifyContextType = {
  recentlyPlayedItem: "",
  setRecentlyPlayedItem: () => {},
};

const SpotifyContext = createContext<SpotifyContextType>(
  DEFAULT_SPOTIFY_CONTEXT
);

interface SpotifyContextProviderProps {
  children: React.ReactNode;
}

export const SpotifyContextProvider: React.FC<SpotifyContextProviderProps> = ({
  children,
}) => {
  const [recentlyPlayedItem, setRecentlyPlayedItem] = useState("");

  return (
    <SpotifyContext.Provider
      value={{
        recentlyPlayedItem,
        setRecentlyPlayedItem,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotifyContext = () => {
  return useContext(SpotifyContext);
};
