import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, weights, fontSize, breakpoints, transitions } = theme;

export const PlaylistBox = styled.a`
  padding: 0.75rem;
  border-radius: 5px;
  flex: 0 0 calc(100% / 2);
  min-width: 150px;
  transition: background ${transitions.base};

  &:hover {
    background: rgba(255, 255, 255, 0.05);

    img {
      opacity: 1;
    }
  }

  @media screen and ${breakpoints.md} {
    flex: 0 0 25%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  margin-bottom: 0.5rem;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity ${transitions.base};
`;

export const PlaylistTitle = styled.strong`
  max-width: 100%;
  color: ${colors.white};
  font-weight: ${weights.bold};
  display: block;
  margin-bottom: 0.25rem;
`;

export const PlaylistTotal = styled.span`
  font-color: ${colors.lightGrey};
  font-size: ${fontSize.sm};
`;
