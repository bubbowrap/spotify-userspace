import { getHashParams } from 'utils';

const token_duration = 3600 * 1000; //3600 = 1 hour

const setAccessToken = (token: string) => {
  localStorage.setItem('spotify_token_time', Date.now().toString());
  localStorage.setItem('spotify_access_token', token);
};

const refreshToken = async () => {
  try {
    const res = await fetch(
      `http://localhost:8888/refresh_token?refresh_token=${localStorage.getItem(
        'spotify_refresh_token'
      )}`
    );
    const { access_token } = await res.json();
    setAccessToken(access_token);
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

  const accessToken = localStorage.getItem('spotify_access_token');

  if (Date.now() - Number(spotifyTokenTime) > token_duration) {
    console.warn('Refreshing Token');
    refreshToken();
  }

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

export const getUserTopTracks = () =>
  fetch(`${BASE_SPOTIFY_URL}/me/top/tracks`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });

export const getUserTopArtists = () =>
  fetch(`${BASE_SPOTIFY_URL}/me/top/artists`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  });
