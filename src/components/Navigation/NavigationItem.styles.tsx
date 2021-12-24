import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';
const { colors, weights, fontSize, transitions } = theme;

export const ListItem = styled.li`
  color: ${colors.lightGrey};
  font-size: ${fontSize.base};
  list-style: none;
  text-decoration: none;
  margin: 1.5rem 0;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0 0.5rem 2rem;
  color: ${colors.lightGrey};
  transition: color ${transitions.base};

  &:hover {
    color: ${colors.white};
    transition: color ${transitions.base};
  }

  &.active {
    color: ${colors.white};
    border-right: 4px solid ${colors.green};
    font-weight: ${weights.bold};
  }
`;

export const Icon = styled.i`
  margin-right: 1.5rem;
`;

export const Title = styled.span`
  flex-basis: 100%;
`;
