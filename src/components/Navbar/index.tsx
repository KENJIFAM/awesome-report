import React from 'react';
import { Container, Title, Root } from './styled';

export interface INavbarProps {
  title: string;
}

const Navbar = ({ title }: INavbarProps) => {
  return (
    <Root>
      <Container>
        <Title>{title}</Title>
      </Container>
    </Root>
  );
};

export default Navbar;
