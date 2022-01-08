import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

const { colors, fontSize } = theme;

const ContainerStyles = styled.div`
  min-height: 100vh;
  display: flex;
`;

const RowStyles = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 100%));
  grid-gap: 2rem;
  justify-content: space-between;
`;

const SectionStyles = styled.section``;

const SectionHeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: ${fontSize.sm};
    text-transform: uppercase;
    font-weight: bolder;

    &:hover {
      color: ${colors.white};
      text-decoration: underline;
    }
  }
`;

export const Container = (props: { children: React.ReactNode }) => {
  return <ContainerStyles>{props.children}</ContainerStyles>;
};

export const Row = (props: { children: React.ReactNode }) => {
  return <RowStyles>{props.children}</RowStyles>;
};

export const Section = (props: { children: React.ReactNode }) => {
  return <SectionStyles>{props.children}</SectionStyles>;
};

export const SectionHeader = (props: { children: React.ReactNode }) => {
  return <SectionHeaderStyles>{props.children}</SectionHeaderStyles>;
};
