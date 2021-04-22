import styled from 'styled-components';
import { useState } from "react"
import { Input } from './Input';

const InputPasswordStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password"
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const InputPasswordWrapper = styled.div`
  display: flex;
  ~div{
    margin-bottom: 8px;
  }
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: .9em;
  padding: 9px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  user-select: none;
`;

function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <InputPasswordWrapper>
      <InputPasswordStyled {...props} />
      <ToggleButton onClick={() => setShowPassword(!showPassword)}> {showPassword ? 'Hide' : 'Show'}</ToggleButton>
    </InputPasswordWrapper>
  )
}

export { InputPassword }
