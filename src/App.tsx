import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Sidebar, Main } from 'components/Layout';
import Homepage from 'pages/Homepage';
import Playlists from 'pages/Playlists';
import TopArtists from 'pages/TopArtists';
import TopTracks from 'pages/TopTracks';
import UserStats from 'pages/UserStats';
import UserLogin from 'components/UserLogin/UserLogin';
import StateContext from 'context/state-context';
import { Loader } from 'components/UI';

function App() {
  const stateCtx = useContext(StateContext);

  return (
    <Container>
      {stateCtx.loading && <Loader />}
      {!stateCtx.loading && stateCtx.loggedIn && (
        <>
          <Sidebar />
          <Main>
            <Routes>
              <Route index element={<Homepage />}></Route>
              <Route path='top-artists' element={<TopArtists />}></Route>
              <Route path='top-tracks' element={<TopTracks />}></Route>
              <Route path='playlists' element={<Playlists />}></Route>
              <Route path='user-stats' element={<UserStats />}></Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Main>
        </>
      )}
      {!stateCtx.loading && !stateCtx.loggedIn && <UserLogin />}
    </Container>
  );
}

export default App;
