import React, { InputHTMLAttributes } from 'react';
import { Container, Label, StyledInput, AddonAfter, InputContainer } from './styled';
import Button from '../Button';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  addonBefore?: JSX.Element;
  addonAfter?: JSX.Element;
  className?: string;
}

const Input = ({ label, addonBefore, addonAfter, className, ...otherProps }: IInputProps) => (
  <Container className={className}>
    {label && <Label>{label}</Label>}
    <InputContainer>
      {addonBefore && (
        <Button secondary group="left" disabled>
          {addonBefore}
        </Button>
      )}
      <StyledInput addonBefore={!!addonBefore} addonAfter={!!addonAfter} {...otherProps} />
      {addonAfter && <AddonAfter>{addonAfter}</AddonAfter>}
    </InputContainer>
  </Container>
);

export default Input;
