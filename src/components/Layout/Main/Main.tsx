import React from 'react';
import Styled from './Main.styles';

const Main = (props: { children: React.ReactNode }) => {
  return (
    <Styled>
      <main>{props.children}</main>
    </Styled>
  );
};

export default Main;
