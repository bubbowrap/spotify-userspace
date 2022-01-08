import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, fontSize, weights, transitions } = theme;

export const TrackTableRow = styled.div`
  display: grid;
  grid-template-columns: min-content 40% minmax(min-content, 1fr) min-content;
  column-gap: 1.5rem;
  grid-auto-flow: column dense;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  transition: all ${transitions.base};
  color: ${colors.lightGrey};

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.05);

    a {
      color: ${colors.white};
    }
  }
`;

export const AlbumImage = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 5px;
`;

export const TrackName = styled.a`
  display: block;
  color: ${colors.white};
  font-size: ${fontSize.base};
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

export const LinkItem = styled.a`
  font-size: ${fontSize.sm};
  transition: all ${transitions.base};
  &:hover,
  &:focus {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

export const TrackDuration = styled.div`
  justify-self: end;
`;
