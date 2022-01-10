import { getHashParams } from 'utils';

const token_duration = 3500 * 1000; //3600 = 1 hour

const getSpotifyRefreshToken = () =>
  localStorage.getItem('spotify_refresh_token');

const setAccessToken = (token: string) => {
  localStorage.setItem('spotify_token_time', Date.now().toString());
  localStorage.setItem('spotify_access_token', token);
};

const refreshToken = async () => {
  try {
    const res = await fetch(
      `http://localhost:8888/refresh_token?refresh_token=${getSpotifyRefreshToken()}`
    );
    const { access_token } = await res.json();
    console.log(access_token);
    setAccessToken(access_token);
    window.location.reload();
    return;
  } catch (e) {
    console.error(e);
  }
};

export const getToken = () => {
  const { error, access_token, refresh_token } = getHashParams();

  if (error) {
    console.error(error);
    refreshToken();
  }
  const spotifyTokenTime: any = () =>
    localStorage.getItem('spotify_token_time');

  if (Date.now() - spotifyTokenTime() > token_duration) {
    console.warn('Refreshing Token');
    refreshToken();
  }

  const accessToken = localStorage.getItem('spotify_access_token');

  if ((!accessToken || accessToken === 'undefined') && access_token) {
    localStorage.setItem('spotify_access_token', access_token);
    localStorage.setItem('spotify_refresh_token', refresh_token);
    localStorage.setItem('spotify_token_time', Date.now().toString());
    return access_token;
  }

  return accessToken;
};

export const token = getToken();

const DEFAULT_HEADERS = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

const BASE_SPOTIFY_URL = 'https://api.spotify.com/v1';

export const getUserProfile = () =>
  fetch(`${BASE_SPOTIFY_URL}/me`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

export const getUserFollowing = () =>
  fetch(`${BASE_SPOTIFY_URL}/me/following?type=artist`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

export const getUserTopTracks = (limit?: number) =>
  fetch(`${BASE_SPOTIFY_URL}/me/top/tracks${limit && `?limit=${limit}`}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

export const getUserTopArtists = (limit?: number) =>
  fetch(`${BASE_SPOTIFY_URL}/me/top/artists${limit && `?limit=${limit}`}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

export const getUserPlaylists = (limit?: number) =>
  fetch(`${BASE_SPOTIFY_URL}/me/playlists${limit && `?limit=${limit}`}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

export const getArtistsById = (ids: string) =>
  fetch(`${BASE_SPOTIFY_URL}/artists?ids=${ids}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });
