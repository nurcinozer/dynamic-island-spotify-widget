import React, { createContext, useContext, useState } from "react";

export type SpotifyIslandType = "DEFAULT" | "EXPANDED";

type RecentlyPlayedItem = {
  track: {
    name: string;
    album: {
      images: [
        {
          url: string;
        }
      ];
    };
    artists: [
      {
        name: string;
      }
    ];
    external_urls: {
      spotify: string;
    };
  };
};

type SpotifyContextType = {
  recentlyPlayedItem: RecentlyPlayedItem;
  setRecentlyPlayedItem: (item: RecentlyPlayedItem) => void;
  spotifyIslandType: SpotifyIslandType;
  setSpotifyIslandType: (type: SpotifyIslandType) => void;
  color: string;
  setColor: (color: string) => void;
};

const DEFAULT_SPOTIFY_CONTEXT: SpotifyContextType = {
  recentlyPlayedItem: {
    track: {
      name: "",
      album: {
        images: [
          {
            url: "",
          },
        ],
      },
      artists: [
        {
          name: "",
        },
      ],
      external_urls: {
        spotify: "",
      },
    },
  },
  setRecentlyPlayedItem: () => {},
  spotifyIslandType: "DEFAULT",
  setSpotifyIslandType: () => {},
  color: "#fff",
  setColor: () => {},
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
  const [recentlyPlayedItem, setRecentlyPlayedItem] =
    useState<RecentlyPlayedItem>(DEFAULT_SPOTIFY_CONTEXT.recentlyPlayedItem);
  const [spotifyIslandType, setSpotifyIslandType] =
    useState<SpotifyIslandType>("DEFAULT");
  const [color, setColor] = useState<string>("#fff");

  return (
    <SpotifyContext.Provider
      value={{
        recentlyPlayedItem,
        setRecentlyPlayedItem,
        spotifyIslandType,
        setSpotifyIslandType,
        color,
        setColor,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};

export const useSpotifyContext = () => {
  return useContext(SpotifyContext);
};
