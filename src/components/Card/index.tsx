import React from 'react';
import { Container, Value, Name } from './styled';

export interface ICardProps {
  name: string;
  value: number;
}

const Card = ({ name, value }: ICardProps) => {
  return (
    <Container>
      <Value>{value}</Value>
      <Name>{name}</Name>
    </Container>
  );
};

export default Card;
