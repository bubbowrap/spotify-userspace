import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, weights, fontSize, breakpoints, transitions } = theme;

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
      box-shadow: 0 10px 20px -5px rgba(42, 184, 89, 0.1);
    }
  }
`;

export const Image = styled.img<ArtistProps>`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 25%;
  aspect-ratio: 5/3;
  margin-bottom: 1rem;
  max-height: 320px;
  height: auto;
  box-shadow: 0 5px 10px -5px rgba(42, 184, 89, 0.05);
  opacity: 0.8;
  transition: all ${transitions.base};
`;

export const ArtistName = styled.strong`
  color: ${colors.white};
  font-size: ${fontSize.base};
  font-weight: ${weights.bold};
  display: block;
  margin-bottom: 0.25rem;

  @media screen and ${breakpoints.lg} {
    font-size: ${fontSize.md};
  }
`;

export const ArtistFollowers = styled.span`
  font-size: ${fontSize.sm};
`;
