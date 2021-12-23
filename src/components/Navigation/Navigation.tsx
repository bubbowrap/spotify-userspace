import NavigationItem from './NavigationItem';
import { NavigationList } from './Navigation.styles';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationItem icon='dashboard' text='Overview' link='/' />
        <NavigationItem
          icon='star_rate'
          text='Top Artists'
          link='top-artists'
        />
        <NavigationItem icon='music_note' text='Top Tracks' link='top-tracks' />
        <NavigationItem icon='queue_music' text='Playlists' link='playlists' />
        <NavigationItem
          icon='multiline_chart'
          text='User Stats'
          link='user-stats'
        />
      </NavigationList>
    </nav>
  );
};

export default Navigation;
