import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  min-height: 100vh;
  display: flex;
`;

const RowStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionStyles = styled.section`
  flex-basis: 50%;
  max-width: 50%;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

const SectionHeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
