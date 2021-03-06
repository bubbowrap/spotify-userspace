import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, fontSize, weights, breakpoints, transitions } = theme;

interface TableParams {
  rank?: Boolean;
}

export const TrackTableRow = styled.div<TableParams>`
  display: grid;
  grid-template-columns:
    ${(props) => props.rank && 'minmax(0, 1.5rem)'} min-content minmax(0, 70%)
    min-content;
  column-gap: 1.5rem;
  grid-auto-flow: column dense;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  transition: all ${transitions.base};
  color: ${colors.lightGrey};

  @media screen and ${breakpoints.md} {
    grid-template-columns:
      ${(props) => props.rank && 'minmax(0, 1.5rem)'} min-content 40% 1fr
      min-content;
  }

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.05);

    a {
      color: ${colors.white};
    }

    img {
      opacity: 1;
    }
  }
`;

export const AlbumImage = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 0.85;
  transition: opacity ${transitions.base};
`;

export const TrackRank = styled.div`
  text-align: right;
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
export const ArtistLink = styled.a`
  font-size: ${fontSize.sm};
  transition: all ${transitions.base};
`;

export const AlbumLink = styled.a`
  display: none;

  @media screen and ${breakpoints.md} {
    display: block;
    font-size: ${fontSize.sm};
    transition: all ${transitions.base};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    width: fit-content;
    padding-left: 10%;

    &:hover,
    &:focus {
      color: ${colors.white};
      text-decoration: underline;
    }
  }
`;

export const TrackDuration = styled.div`
  justify-self: end;
`;
