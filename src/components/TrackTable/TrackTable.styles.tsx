import styled from 'styled-components';
import theme from 'styles/theme';

const { fontSize } = theme;

export const TrackTableContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const Attribution = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSize.xs};
  margin-top: 1rem;
  justify-content: end;
  span {
    margin-right: 0.5rem;
  }
`;
