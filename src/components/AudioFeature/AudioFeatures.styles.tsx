import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, fontSize, transitions, weights } = theme;

export const FeatureContainer = styled.a`
  display: block;
  padding: 0.75rem;
  border-radius: 5px;
  transition: background ${transitions.base};

  &:hover {
    background: rgba(255, 255, 255, 0.05);

    img {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity ${transitions.base};
`;

export const TrackName = styled.strong`
  max-width: 100%;
  color: ${colors.white};
  font-weight: ${weights.bold};
  display: block;
  margin-bottom: 0.25rem;
`;

export const TrackArtist = styled.span`
  font-color: ${colors.lightGrey};
  font-size: ${fontSize.sm};
`;
