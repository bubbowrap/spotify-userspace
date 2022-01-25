import React from 'react';
import { useContext } from 'react';
import StateContext from 'context/state-context';
import { ListItem, StyledLink, Icon, Title } from './NavigationItem.styles';

const NavigationItem: React.FC<{
  icon?: string;
  text?: string;
  link: string;
}> = ({ link, icon, text }) => {
  const stateCtx = useContext(StateContext);

  return (
    <ListItem>
      <StyledLink to={link} onClick={stateCtx.toggleSidebar}>
        {icon && <Icon className='material-icons'>{icon}</Icon>}
        <Title>{text}</Title>
      </StyledLink>
    </ListItem>
  );
};

export default NavigationItem;
