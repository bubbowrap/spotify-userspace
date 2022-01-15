import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, weights, fontSize, transitions } = theme;

interface ArtistProps {
  imgSize?: string;
}

export const ItemContainer = styled.div`
  display: block;
`;

export const ItemLink = styled.a`
  display: block;
  margin-right: 1.5rem;
  &:hover,
  &:focus {
    img {
      opacity: 1;
    }
  }
`;

export const Image = styled.img<ArtistProps>`
  max-width: 100%;
  object-fit: cover;
  object-position: 50% 25%;
  aspect-ratio: 5/3;
  border-radius: 10px;
  margin-bottom: 1rem;
  max-height: 150px;
  height: auto;
  box-shadow: 0 10px 20px -5px rgba(42, 184, 89, 0.1);
  opacity: 0.8;
  transition: opacity ${transitions.base};

  ${(props) =>
    props.imgSize === 'large' &&
    `
    max-height: 300px;
  `};
`;

export const ArtistName = styled.strong`
  color: ${colors.white};
  font-size: ${fontSize.md};
  font-weight: ${weights.bold};
  display: block;
  margin-bottom: 0.25rem;
`;

export const ArtistFollowers = styled.span`
  font-size: ${fontSize.sm};
`;
