import React from 'react';
import Styled from './Main.styles';

const Main = (props: { children: React.ReactNode }) => {
  return <Styled>{props.children}</Styled>;
};

export default Main;
