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

  &:not(:last-child) {
    padding-bottom: 4rem;
    border-bottom: thin solid ${colors.darkestGrey};
  }
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

interface ElementProps {
  children?: React.ReactNode;
}

export const Container: React.FC<ElementProps> = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export const Row: React.FC<ElementProps> = ({ children }) => {
  return <RowStyles>{children}</RowStyles>;
};

export const Section: React.FC<ElementProps> = ({ children }) => {
  return <SectionStyles>{children}</SectionStyles>;
};

export const SectionHeader: React.FC<ElementProps> = ({ children }) => {
  return <SectionHeaderStyles>{children}</SectionHeaderStyles>;
};
