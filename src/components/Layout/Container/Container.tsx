import React from 'react';
import Styled from './Container.styles';

const Container = (props: { children: React.ReactNode }) => {
  return <Styled>{props.children}</Styled>;
};

export default Container;
