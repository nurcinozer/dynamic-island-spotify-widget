import { useSpotifyContext } from "../context";
import { Buffer } from "buffer";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

export const useSpotifyApi = () => {
  const { recentlyPlayedItem, setRecentlyPlayedItem } = useSpotifyContext();

  const getAccessToken = async () => {
    const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
        "base64"
      ),
      response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=refresh_token&refresh_token=${REFRESH_TOKEN}`,
      }),
      data = await response.json();

    return data.access_token;
  };

  const getRecentlyPlayed = async () => {
    const accessToken = await getAccessToken(),
      response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      data = await response.json();

    setRecentlyPlayedItem(data.items[0].track.name);
  };

  return {
    recentlyPlayedItem,
    setRecentlyPlayedItem,
    getRecentlyPlayed,
  };
};
