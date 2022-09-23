import React from "react";
import { motion } from "framer-motion";
import { useSpotifyContext } from "../../context";
import { PlayingAnimation } from "../PlayingAnimation";

export const DefaultSection: React.FC = () => {
  const { recentlyPlayedItem, color } = useSpotifyContext();

  return (
    <motion.div
      initial={{
        width: "188px",
        height: "37px",
        padding: "6.5px 9px",
      }}
      exit={{
        width: "188px",
        height: "37px",
        padding: "6.5px 9px",
      }}
      animate="visible"
      className="flex justify-between"
    >
      <img
        src={recentlyPlayedItem.track.album.images[0].url}
        className="w-6 h-6 object-cover rounded-md"
        alt=""
      />
      <PlayingAnimation color={color} />
    </motion.div>
  );
};
