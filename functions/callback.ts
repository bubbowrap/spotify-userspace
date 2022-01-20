const axios = require('axios');

const siteUrl = process.env.REACT_APP_SITE_URL;
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = `${siteUrl}/.netlify/functions/callback`;

const querystring = require('querystring');

exports.handler = async function (event, context) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  const { code, state } = event.queryStringParameters || null;

  const storedState = event.headers.cookie
    ? event.headers.cookie.split(';')[0].split('=')[1]
    : null;

  if (state === null || state !== storedState) {
    return {
      statusCode: 302,
      headers: {
        Location: `/#${querystring.stringify({ error: 'state_mismatch' })}`,
        'Cache-Control': 'no-cache',
      },
    };
  } else {
    const authOptions = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      params: {
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${CLIENT_ID}:${CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      json: true,
    };

    // use the access token to access the Spotify Web API
    return axios(authOptions)
      .then((res) => {
        const { access_token, refresh_token } = res.data;
        // we can also pass the token to the browser to make requests from there
        return {
          statusCode: 302,
          headers: {
            Location: `${siteUrl}/#${querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
            })}`,
            'Cache-Control': 'no-cache',
          },
        };
      })
      .catch((err) => {
        console.log(err);
        return {
          statusCode: 302,
          headers: {
            Location: `${siteUrl}/#${querystring.stringify({
              error: 'invalid_token',
            })}`,
            'Cache-Control': 'no-cache',
          },
        };
      });
  }
};

export {};
