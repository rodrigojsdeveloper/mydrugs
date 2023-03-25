import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		border: none;
		box-sizing: border-box;
		font-family: 'Arial', sans-serif;
		scroll-behavior: smooth;
	}

	:root {
		// Colors greys
		--grey-100: #0E0E0E;
		--grey-50: #383D3F;
		--grey-20: #C0C0C0;

		// Colors default
		--white-fixed: #FFFFFF;
		--red-fixed: #DC3545;
		--transparent: transparent;

		// Shadows
		--shadow: rgba(0, 0, 0, 0.95)
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
