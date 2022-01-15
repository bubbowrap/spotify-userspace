import {
  ItemContainer,
  ItemLink,
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

const SliderItem: React.FC<ArtistProps> = ({ artist }) => {
  return (
    <ItemContainer>
      <ItemLink
        href={artist.external_urls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={artist.images[0].url} alt={artist.name} />
        <ArtistName>{artist.name}</ArtistName>
        <ArtistFollowers>
          {artist.followers.total.toLocaleString()} Followers
        </ArtistFollowers>
      </ItemLink>
    </ItemContainer>
  );
};

export default SliderItem;
