import React from 'react';
import { ListItem, StyledLink, Icon, Title } from './NavigationItem.styles';

const NavigationItem: React.FC<{ icon?: string; text?: string; link: string }> =
  ({ link, icon, text }) => {
    return (
      <ListItem>
        <StyledLink to={link}>
          {icon && <Icon className='material-icons'>{icon}</Icon>}
          <Title>{text}</Title>
        </StyledLink>
      </ListItem>
    );
  };

export default NavigationItem;
