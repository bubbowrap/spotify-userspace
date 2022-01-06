import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, fontSize, weights, transitions } = theme;

export const TrackTableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  transition: ${transitions.base};
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
  margin-right: 1.5rem;
`;

export const TrackName = styled.a`
  display: flex;
  color: ${colors.white};
  font-size: ${fontSize.base};
  font-weight: ${weights.bold};
  margin-bottom: 0.25rem;

  &:hover,
  &:focus {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

export const LinkItem = styled.a`
  font-size: ${fontSize.sm};

  &:hover,
  &:focus {
    color: ${colors.white};
    text-decoration: underline;
  }
`;
