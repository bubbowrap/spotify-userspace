import styled from 'styled-components';

export const SliderContainer = styled.div`
  margin-right: -2rem;
  overflow-y: auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const SliderTrack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
  width: 200vw;
`;
