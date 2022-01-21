# Spotify User Space

Project to try out the Spotify API. It shows a user's Spotify stats in a bunch of neat ways. Stuff used:

- React
- Typescript
- Styled Components
- Chart.js
- Spotify API
- Serverless Functions
- Netlify

 Technically you can see the app at [https://spotify-userspace.netlify.app](https://spotify-userspace.netlify.app), but Spotify has this whole development mode thing where I have to whitelist/add user e-mails MANUALLY for them to be able to get access, so...I guess [e-mail me](mailto:bubbowrap@gmail.com?subject=Spotify%20Userspace%20Access) and I'll give it to you. We'll see if they let me become a real app and I can delete this entire paragraph.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A lot of interesting things to figure out with this project. Hand designed and styled from the ground up solely because I felt like I didn't need a whole heavy css framework for something so relatively simple, y'know? Plus with design, if you don't use it you lose it (that's probably not actually true) and saw it as a neat opportunity to brush off the skills.

## Available Scripts

I initially built a node/express server for authentification, but ended up needing to rewrite it all into serverless functions/the Netlify CLI. To test this out locally, you'll first need to [install the Netlify CLI](https://docs.netlify.com/cli/get-started/).

You'll then need to set up a [Spotify Developer account](https://developer.spotify.com/) and grab the client id/client secret and add those into a .env file. You'll have to whitelist your dev space in Spotify too (I set mine a  http://localhost:8888/callback and http://localhost:8888/.netlify/functions/callback).

For obvious reasons I can't help you out with that, but after that in the project directory you can run:

### `netlify dev`

Runs the app in the development mode.\
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Alternatively you can navigate to the project directory root and run my old server with `node server` and then navigate to [http://localhost:8888](http://localhost:8888). It should do some fancy redirect stuff that'll let you use the web app on [http://localhost:3000](http://localhost:3000) but frankly that was the old me and old Jeremy somehow wanted to do it in the most complicated way possible. Lemme know what you think though!
