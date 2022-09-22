import { motion } from "framer-motion";
import { useSpotifyContext } from "../../context";
import { PlayingAnimation } from "../PlayingAnimation";

export const ExpandedSection: React.FC = () => {
  const { recentlyPlayedItem } = useSpotifyContext();

  return (
    <motion.div
      animate={{ width: "350px", height: "100px", padding: "18px 20px" }}
    >
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={recentlyPlayedItem.track.album.images[0].url}
          className="w-16 h-16 object-cover rounded-2xl"
          alt=""
        />
        <div className="flex-1 ml-4 leading-5">
          <p className="text-white w-fit">
            <a
              href={recentlyPlayedItem.track.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
            >
              {recentlyPlayedItem.track.name}
            </a>
          </p>
          <p className="text-darkgray">
            {recentlyPlayedItem.track.artists[0].name}
          </p>
        </div>
        <PlayingAnimation />
      </motion.div>
    </motion.div>
  );
};
