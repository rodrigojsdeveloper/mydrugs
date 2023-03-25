import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
		font-family: 'Arial', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
		--grey-100: #0E0E0E;
		--white-fixed: #FFFFFF;
	}

  body {
		background-color: var(--grey-100);
		color: var(--white-fixed);
	}

  button, a {
		cursor: pointer;
	}

  a {
		text-decoration: none;
	}
  
  &::-webkit-scrollbar {
		display: none;
	}
`;
