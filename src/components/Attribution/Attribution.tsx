import SpotifyLogo from 'assets/images/logo-spotify--full.png';
import styled from 'styled-components';
import theme from 'styles/theme';

const { fontSize } = theme;

interface AttributionProps {
  position?: string;
}

const AttributionContainer = styled.div<AttributionProps>`
  display: flex;
  align-items: center;
  font-size: ${fontSize.xs};
  margin-top: 1rem;
  justify-content: ${(props) => (props.position === 'start' ? 'start' : 'end')};
  flex-basis: 100%;

  span {
    margin-right: 0.5rem;
  }
`;

const Attribution: React.FC<AttributionProps> = ({ position }) => {
  return (
    <AttributionContainer position={position}>
      <span>Powered by</span> <img src={SpotifyLogo} alt='Spotify Logo' />
    </AttributionContainer>
  );
};

export default Attribution;
