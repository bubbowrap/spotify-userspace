import React from 'react';
import { ListItem, StyledLink, Icon, Title } from './NavigationItem.styles';

const NavigationItem: React.FC<{ icon: string; text: string; link: string }> = (
  props
) => {
  return (
    <ListItem>
      <StyledLink to={props.link}>
        {props.icon && <Icon className='material-icons'>{props.icon}</Icon>}
        <Title>{props.text}</Title>
      </StyledLink>
    </ListItem>
  );
};

export default NavigationItem;
