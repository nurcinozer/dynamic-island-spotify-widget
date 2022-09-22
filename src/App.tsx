import { useCallback, useMemo, useState } from "react";
import { useSpotifyContext } from "./context";
import { useSpotifyApi } from "./hooks";
import { motion } from "framer-motion";
import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

export const App = () => {
  const { getRecentlyPlayed } = useSpotifyApi();
  const {
    setRecentlyPlayedItem,
    recentlyPlayedItem,
    spotifyIslandType,
    setSpotifyIslandType,
  } = useSpotifyContext();

  const [color, setColor] = useState("#fff");
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
  }, [getRecentlyPlayed, setRecentlyPlayedItem]);

  useMemo(() => {
    getRecentlyPlayedItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const innerContent = useMemo(() => {
    if (spotifyIslandType === "DEFAULT") {
      return (
        <motion.div
          initial={{ width: "188px", height: "37px", padding: "6.5px 9px" }}
          animate="visible"
          exit={{ width: "188px", height: "37px", padding: "6.5px 9px" }}
          className="flex justify-between"
        >
          <img
            src={recentlyPlayedItem.track.album.images[0].url}
            className="w-6 h-6 object-cover rounded-md"
            alt=""
          />
          <div className="flex justify-between w-22-px h-20-px">
            <div
              className="rounded-lg scale-y-04 h-full w-2-px animate-quiet"
              style={{
                background: color,
              }}
            ></div>
            <div
              className="rounded-lg scale-y-04 h-full w-2-px animate-normal"
              style={{
                background: color,
              }}
            ></div>
            <div
              className="rounded-lg scale-y-04 h-full w-2-px animate-quiet"
              style={{
                background: color,
              }}
            ></div>
            <div
              className="rounded-lg scale-y-04 h-full w-2-px animate-loud"
              style={{
                background: color,
              }}
            ></div>
            <div
              className="rounded-lg scale-y-04 h-full w-2-px animate-quiet"
              style={{
                background: color,
              }}
            ></div>
            <div
              className="rounded-lg scale-y-04 h-full w-2-px animate-normal"
              style={{
                background: color,
              }}
            ></div>
          </div>
        </motion.div>
      );
    }
    if (spotifyIslandType === "EXPANDED") {
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
            <div className="flex justify-between w-22-px h-20-px self-start">
              <div className="rounded-lg scale-y-04 h-full w-2-px animate-quiet bg-darkgray"></div>
              <div className="rounded-lg scale-y-04 h-full w-2-px animate-normal bg-darkgray"></div>
              <div className="rounded-lg scale-y-04 h-full w-2-px animate-quiet bg-darkgray"></div>
              <div className="rounded-lg scale-y-04 h-full w-2-px animate-loud bg-darkgray"></div>
              <div className="rounded-lg scale-y-04 h-full w-2-px animate-quiet bg-darkgray"></div>
              <div className="rounded-lg scale-y-04 h-full w-2-px animate-normal bg-darkgray"></div>
            </div>
          </motion.div>
        </motion.div>
      );
    }
  }, [
    color,
    recentlyPlayedItem.track.album.images,
    recentlyPlayedItem.track.artists,
    recentlyPlayedItem.track.external_urls.spotify,
    recentlyPlayedItem.track.name,
    spotifyIslandType,
  ]);

  if (!recentlyPlayedItem || !isLoaded) {
    return null;
  }

  return (
    <div className="absolute top-7 mx-auto left-0 right-0 max-w-fit">
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
      >
        {innerContent}
      </motion.div>
    </div>
  );
};
