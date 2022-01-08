import {
  ItemContainer,
  Image,
  ArtistName,
  ArtistFollowers,
} from './SliderItem.styles';

interface ArtistProps {
  artist: {
    external_urls: {
      spotify: string;
    };
    images: any[];
    name: string;
    followers: {
      total: number;
    };
  };
}

const SliderItem: React.FC<ArtistProps> = (props) => {
  return (
    <ItemContainer
      href={props.artist.external_urls.spotify}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image src={props.artist.images[0].url} alt={props.artist.name} />
      <ArtistName>{props.artist.name}</ArtistName>
      <ArtistFollowers>
        {props.artist.followers.total.toLocaleString()} Followers
      </ArtistFollowers>
    </ItemContainer>
  );
};

export default SliderItem;
