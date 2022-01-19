import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, fontSize, weights, transitions } = theme;

export const NowPlayingContainer = styled.div`
  margin: 1.5rem;
`;

export const NowPlayingContent = styled.div`
  display: flex;
  align-items: center;
`;

export const NowPlayingHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h4 {
    margin: 0;
  }
`;

export const AlbumImage = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 1rem;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 5px;
  opacity: 0.85;
  transition: opacity ${transitions.base};

  &:hover {
    opacity: 1;
  }
`;

export const TrackName = styled.a`
  display: block;
  color: ${colors.white};
  font-size: ${fontSize.sm};
  font-weight: ${weights.bold};
  margin-bottom: 0.25rem;
  transition: all ${transitions.base};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  width: fit-content;

  &:hover,
  &:focus {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

export const ArtistLink = styled.a`
  font-size: ${fontSize.sm};
  transition: all ${transitions.base};

  &:hover,
  &:focus {
    color: ${colors.white};
    text-decoration: underline;
  }
`;
