import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, fontSize, transitions, weights } = theme;

export const FeatureContainer = styled.a`
  display: flex;
  align-items: center;
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
  margin-bottom: 0.5rem;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity ${transitions.base};
  margin-right: 0.75rem;
`;

export const TrackInfo = styled.div`
  overflow: hidden;
`;

export const TrackName = styled.strong`
  max-width: 100%;
  color: ${colors.white};
  font-weight: ${weights.bold};
  display: block;
  margin-bottom: 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  width: fit-content;
`;

export const TrackArtist = styled.span`
  font-color: ${colors.lightGrey};
  font-size: ${fontSize.sm};
`;
