import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Sidebar, Main } from 'components/Layout';
import Homepage from 'pages/Homepage';
import Playlists from 'pages/Playlists';
import TopArtists from 'pages/TopArtists';
import TopTracks from 'pages/TopTracks';
import UserStats from 'pages/UserStats';
import UserLogin from 'components/UserLogin/UserLogin';
const isLoggedIn = false;

function App() {
  return (
    <Container>
      {isLoggedIn ? (
        <React.Fragment>
          <Sidebar />
          <Main>
            <Routes>
              <Route index element={<Homepage />}></Route>
              <Route path='top-artists' element={<TopArtists />}></Route>
              <Route path='top-tracks' element={<TopTracks />}></Route>
              <Route path='playlists' element={<Playlists />}></Route>
              <Route path='user-stats' element={<UserStats />}></Route>
            </Routes>
          </Main>
        </React.Fragment>
      ) : (
        <UserLogin />
      )}
    </Container>
  );
}

export default App;
