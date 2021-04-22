import styled, { css } from 'styled-components';

const Button = styled.button`
	color: ${(props) => props.secondary ? props.theme.secondaryColor : props.theme.primaryColor};
	background: ${(props) => props.secondary ? props.theme.primaryColor : props.theme.secondaryColor};
	font-weight: bold;
	width: 100%;
	border: none;

  ${(props) => props.large
    ? css`
    	padding: 10px;
      font-size: 2em;
    `
    : css`
    	padding: 10px;
      font-size: .8em;
    `
  }

	&:disabled{
		color: #666;
		background: #eee;
	}
`;

export { Button };
