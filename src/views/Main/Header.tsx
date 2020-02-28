import React, { useState, memo } from 'react';
import {
  HeaderContainer,
  DateInput,
  TokenInput,
  FetchButton,
  InputContainer,
  ClearButton,
  ButtonContainer,
} from './styled';
import { ReactComponent as PersonIcon } from '../../assets/icon-person.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/icon-visibility.svg';
import { ReactComponent as VisibilityOffIcon } from '../../assets/icon-visibility-off.svg';

export interface IHeaderProps {
  startDate: string;
  endDate: string;
  token: string;
  isFetched: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => void;
  handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Header = ({
  startDate,
  endDate,
  token,
  isFetched,
  handleChange,
  handleSubmit,
  handleClear,
}: IHeaderProps) => {
  const [hideToken, setHideToken] = useState(true);

  const handleEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) =>
    (e.key === 'Enter' || e.key === 'NumpadEnter') && handleSubmit(e);

  const renderInputFields = () => (
    <InputContainer>
      <DateInput
        name="startDate"
        label="Start date"
        type="date"
        value={startDate}
        onChange={handleChange}
      />
      <DateInput
        name="endDate"
        label="End date"
        type="date"
        value={endDate}
        onChange={handleChange}
      />
      <TokenInput
        name="token"
        placeholder="Access token"
        type={hideToken ? 'password' : 'text'}
        value={token}
        onChange={handleChange}
        onKeyDown={handleEnterSubmit}
        addonBefore={<PersonIcon />}
        addonAfter={
          <span onClick={() => setHideToken(!hideToken)}>
            {hideToken ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        }
      />
    </InputContainer>
  );

  const renderControlButtons = () => (
    <ButtonContainer>
      <FetchButton primary big={!isFetched} type="submit">
        Fetch
      </FetchButton>
      {isFetched && (
        <ClearButton secondary onClick={handleClear}>
          Clear
        </ClearButton>
      )}
    </ButtonContainer>
  );

  return (
    <HeaderContainer onSubmit={handleSubmit}>
      {renderInputFields()}
      {renderControlButtons()}
    </HeaderContainer>
  );
};

export default memo(Header);
