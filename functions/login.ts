const siteUrl = process.env.REACT_APP_SITE_URL;
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = `${siteUrl}/.netlify/functions/callback`;

const querystring = require('querystring');

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state';

// your application requests authorization
const scope =
  'user-read-private user-read-email user-follow-read user-library-read user-top-read user-read-recently-played user-read-currently-playing playlist-read-collaborative playlist-read-private';

exports.handler = async function (event, context) {
  const state = generateRandomString(16);

  const stateCookie = `${stateKey}=${state}`;

  const authorizationURI =
    'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      show_dialog: true,
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI,
      state: state,
    });

  return {
    statusCode: 302,
    headers: {
      Location: authorizationURI,
      'Set-Cookie': stateCookie,
      'Cache-Control': 'no-cache',
    },
  };
};

export {};
