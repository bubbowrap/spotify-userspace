import {
  ItemContainer,
  ItemLink,
  Image,
  ArtistName,
  ArtistFollowers,
} from './ArtistItem.styles';

interface ArtistProps {
  imgSize?: string;
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

const SliderItem: React.FC<ArtistProps> = ({ artist, imgSize }) => {
  return (
    <ItemContainer>
      <ItemLink
        href={artist.external_urls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src={artist.images[`${imgSize === 'large' ? 6 : 1}`].url}
          alt={artist.name}
          imgSize={imgSize}
        />
        <ArtistName>{artist.name}</ArtistName>
        <ArtistFollowers>
          {artist.followers.total.toLocaleString()} Followers
        </ArtistFollowers>
      </ItemLink>
    </ItemContainer>
  );
};

export default SliderItem;
