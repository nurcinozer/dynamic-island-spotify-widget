# Spotify Island

Dynamic island style widget for displaying what you're recently played on Spotify.

https://user-images.githubusercontent.com/20209512/191861635-5684f733-02b0-44b9-b7db-720950c6cae6.mov

## 1. Get Spotify Token

- Create a new app in [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
- Get your client ID and client secret from that app
- Authorize with your client ID and scopes (e.g. user-read-recently-played)
- Copy your code from the URL
- Get your refresh token

## 2. Environment Variables

Use the template `.env.example.`

To sync with your account, you'll need three things from Spotify Developer:

- Client ID
- Client secret
- Refresh token

If you are going to use Spotify Island in your Nextjs project you also need to create `next.config.js` file for adding environment variables like this:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_SPOTIFY_CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    REACT_APP_SPOTIFY_CLIENT_SECRET:
      process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
    REACT_APP_SPOTIFY_REFRESH_TOKEN:
      process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN,
  },
};

module.exports = nextConfig;
```

## 3. Props

| key       | type                                                                               | default   |
|-----------|------------------------------------------------------------------------------------|-----------|
| position? | "top-left", "top-right", "bottom-left", "bottom-right", "bottom-center", "default" | "default" |