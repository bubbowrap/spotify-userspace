const axios = require('axios');

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

exports.handler = async function (event, context) {
  // requesting access token from refresh token
  let refresh_token = event.queryStringParameters.refresh_token;
  console.log('grabbing token');
  const authOptions = {
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString('base64')}`,
    },
    params: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    },
    json: true,
  };

  return axios(authOptions)
    .then((response) => {
      const { expires_in, access_token } = response.data;

      refresh_token = response.data.refresh_token
        ? response.data.refresh_token
        : refresh_token;

      // pass the tokens to the response body
      return {
        statusCode: 200,
        body: JSON.stringify({
          access_token: access_token,
          refresh_token: refresh_token,
          expires_in: expires_in,
        }),
      };
    })
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify({ err }),
      };
    });
};

export {};
