import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, fontSize, transitions } = theme;

export const ItemContainer = styled.a`
  display: block;
  transition: all ${transitions.base};

  &:hover,
  &:focus {
  }
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: 50% 25%;
  aspect-ratio: 5/3;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const ArtistName = styled.strong`
  color: ${colors.white};
  font-size: ${fontSize.md};
  display: block;
`;

export const ArtistFollowers = styled.span`
  font-size: ${fontSize.sm};
`;
