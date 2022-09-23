import React, { useCallback, useMemo, useState } from "react";
import { useSpotifyContext } from "../context";
import { useSpotifyApi } from "../hooks";
import { motion } from "framer-motion";
import { FastAverageColor } from "fast-average-color";
import { DefaultSection, ExpandedSection } from "../components";

const fac = new FastAverageColor();

export type SpotifyIslandProps = {
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "bottom-center"
    | "default";
};

export const SpotifyIsland: React.FC<SpotifyIslandProps> = ({
  position = "default",
}) => {
  const { getRecentlyPlayed } = useSpotifyApi();
  const {
    setRecentlyPlayedItem,
    recentlyPlayedItem,
    spotifyIslandType,
    setSpotifyIslandType,
    setColor,
  } = useSpotifyContext();

  const [isLoaded, setIsLoaded] = useState(false);

  const getRecentlyPlayedItem = useCallback(async () => {
    setIsLoaded(false);

    const recentlyPlayed = await getRecentlyPlayed();
    const recentlyPlayedItem = recentlyPlayed.items[0];
    const color = await fac
      .getColorAsync(recentlyPlayedItem.track.album.images[0].url)
      .then((color) => color.hex);

    setRecentlyPlayedItem(recentlyPlayedItem);
    setColor(color);
    setIsLoaded(true);
  }, [getRecentlyPlayed, setColor, setRecentlyPlayedItem]);

  useMemo(() => {
    getRecentlyPlayedItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const innerContent = useMemo(() => {
    if (spotifyIslandType === "DEFAULT") {
      return <DefaultSection />;
    }
    if (spotifyIslandType === "EXPANDED") {
      return <ExpandedSection />;
    }
  }, [spotifyIslandType]);

  const positionClass = useMemo(() => {
    switch (position) {
      case "top-left":
        return "left-6 top-7";
      case "top-right":
        return "right-6 top-7";
      case "bottom-left":
        return "left-6 bottom-6";
      case "bottom-right":
        return "right-6 bottom-6";
      case "bottom-center":
        return "bottom-6 mx-auto left-0 right-0 max-w-fit";
      case "default":
        return "top-7 mx-auto left-0 right-0 max-w-fit";
      default:
        return "top-7 mx-auto left-0 right-0 max-w-fit";
    }
  }, [position]);

  if (!recentlyPlayedItem || !isLoaded) {
    return null;
  }

  return (
    <div className={`fixed ${positionClass}`}>
      <motion.div
        className={`flex justify-center items-center bg-black cursor-pointer ${
          spotifyIslandType === "DEFAULT" ? "rounded-54-px" : "rounded-42-px"
        }`}
        onClick={() => {
          if (spotifyIslandType === "DEFAULT") {
            setSpotifyIslandType("EXPANDED");
          }
          if (spotifyIslandType === "EXPANDED") {
            setSpotifyIslandType("DEFAULT");
          }
        }}
        layout
      >
        {innerContent}
      </motion.div>
    </div>
  );
};
