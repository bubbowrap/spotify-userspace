import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, fontSize } = theme;

export const PlaylistBox = styled.a`
  padding: 0.75rem;
  border-radius: 5px;
  flex: 1 0 33%;
  max-width: 175px;
  min-width: 100px;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  object-fit: cover;
  object-position: ;
`;

export const PlaylistTitle = styled.strong`
  max-width: 100%;
  color: ${colors.white};
  display: block;
  margin-bottom: 0.25rem;
`;

export const PlaylistTotal = styled.span`
  font-color: ${colors.lightGrey};
  font-size: ${fontSize.sm};
`;
