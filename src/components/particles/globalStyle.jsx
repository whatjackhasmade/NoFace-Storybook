import { createGlobalStyle } from "styled-components"
import "normalize.css/normalize.css"

import device from "./mediaQueries"
import Fonts from "./fonts"
import ThemeDefault from "./themeDefault"

import ButtonReset from "atoms/button/button.reset"

const spacingSizes = [
  `0`,
  ThemeDefault.spacingTiny,
  ThemeDefault.spacingSmall,
  ThemeDefault.spacingDefault,
  ThemeDefault.spacingLarge,
  ThemeDefault.spacingHuge,
]

function marginTemplate(i, d) {
  const dTrimmed = d.charAt(0)
  const amount = spacingSizes[i]

  return `
		.m${dTrimmed}-${i} {
			margin-${d}: ${amount} !important;
		}
	`
}

function marginUtilities(d) {
  let str = ``
  for (let i = 0; i <= 5; i++) {
    str += marginTemplate(i, d)
  }
  return str
}

const paddingTemplate = (i, d) => {
  const dTrimmed = d.charAt(0)
  const amount = spacingSizes[i]

  if (d === `all`) {
    return `
		.p-${i} {
			padding: ${amount} !important;
		}
	`
  }

  return `
		.m${dTrimmed}-${i} {
			margin-${d}: ${amount} !important;
		}
	`
}

const paddingUtilities = d => {
  let str = ``
  for (let i = 0; i <= 5; i++) {
    str += paddingTemplate(i, d)
  }
  return str
}

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Circular';
		src: url(${Fonts.CircularRegularEOT}); /* IE9 Compat Modes */
		src: url(${
      Fonts.CircularRegularEOTIE
    }) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.CircularRegularWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.CircularRegularWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.CircularRegularTTF})  format('truetype'); /* Safari, Android, iOS */
		font-style: normal;
		font-weight: 400;
	}

		@font-face {
		font-family: 'Circular';
		src: url(${Fonts.CircularMediumEOT}); /* IE9 Compat Modes */
		src: url(${
      Fonts.CircularMediumEOTIE
    }) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.CircularMediumWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.CircularMediumWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.CircularMediumTTF})  format('truetype'); /* Safari, Android, iOS */
		font-style: normal;
		font-weight: 500;
	}

		@font-face {
		font-family: 'Circular';
		src: url(${Fonts.CircularBoldEOT}); /* IE9 Compat Modes */
		src: url(${Fonts.CircularBoldEOTIE}) format('embedded-opentype'), /* IE6-IE8 */
			url(${Fonts.CircularBoldWOFF2}) format('woff2'), /* Super Modern Browsers */
			url(${Fonts.CircularBoldWOFF}) format('woff'), /* Pretty Modern Browsers */
			url(${Fonts.CircularBoldTTF})  format('truetype'); /* Safari, Android, iOS */
		font-style: normal;
		font-weight: 700;
	}


	/* apply a natural box layout model to all elements, but allowing components to change */
	*, *:before, *:after {
		box-sizing: inherit;
	}

	::-webkit-scrollbar
	{
		width: 15px;
		background-color: ${props => props.theme.grey800};
	}

	::-webkit-scrollbar-thumb
	{
		background-color: ${props => props.theme.grey600};
		border: 2px solid ${props => props.theme.grey600};
	}

	body,
	#root {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	a {
		position: relative;

		color: inherit;
		text-decoration: none;

		&:after {
			bottom: -6px;
			content: "";
			height: 2px;
			left: 0;
			position: absolute;
			width: 100%;

			background: currentColor;
			transform: scaleX(0);
			transform-origin: right center;
			transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
		}

		&:focus {
			outline: 1px dotted black;
			outline-offset: 8px;
		}

		&:active,
		&:focus,
		&:hover,
		&.active {
			text-decoration: none;

			&:after {
				transform: scaleX(1);
				transform-origin: left center;
			}
		}
	}

	article a {
		&:after {
			transform: scaleX(1);
			transform-origin: left center;
		}
	}

	button {
	  cursor: pointer;
	}

	body {
		overflow-x: hidden;

  	background-color: ${props => props.theme.black};
		color: ${props => props.theme.white};
		font-family: "Circular", "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 1.8rem;
		line-height: 1.5;
		scroll-behavior: smooth;
	}

	*[data-index="0"] {
		padding-top: 114px;

		@media ${device.md} {
			padding-top: 0;
		}
	}

	h1, h2, h3, h4, h5, h6 {
		line-height: 1.25;
		margin: 16px 0;

		font-weight: 700;
		text-transform: capitalize;
	}

	h1,
	.h1 {
		margin-bottom: 24px;
		margin-top: 24px;

		font-size: 32px;
		line-height: 1.1;

		@media ${device.xs} {
			font-size: 48px;
		}

		@media ${device.lg} {
			font-size: 72px;
		}
	}

	h2,
	.h2 {
		font-size: 30px;

		@media ${device.lg} {
			font-size: 48px;
		}
	}

	h3,
	.h3 {
		font-size: 24px;

		@media ${device.lg} {
			font-size: 30px;
		}
	}

	h4,
	.h4 {
		font-size: 20px;

		@media ${device.lg} {
			font-size: 24px;
		}
	}

	h5,
	.h5 {
		font-size: 18px;

		@media ${device.lg} {
			font-size: 20px;
		}
	}

	h6,
	.h6 {
		font-size: 16px;

		@media ${device.lg} {
			font-size: 18px;
		}
	}

	html {
		box-sizing: border-box;
		min-height: 100vh;
		overflow-y: scroll;

		font-family: "Circular", "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 62.5%;

		/* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;

		@media ${device.MXsm} {
			&.scroll--fixed {
				overflow: hidden;
			}
		}
	}

	/* Form Styles */
	.wrapper {
		button,
		input,
		label,
		textarea {
			border-radius: 3px;
		}

		input {
			max-width: 100%;
		}

		fieldset {
			margin-bottom: 32px;
			padding: 0;

			border: none;
		}

		form {
			margin-bottom: 32px;

			color: ${props => props.theme.black};
			font-weight: 500;

			button,
			input,
			select,
			textarea,
			.DateRangePicker {
				margin-top: ${props => props.theme.spacingDefault};
			}
		}

		label {
			display: block;
			margin-bottom: ${props => props.theme.spacingTiny};
			margin-top: 24px;

			color: ${props => props.theme.grey800};
			font-size: 14px;
			font-weight: 500;
			letter-spacing: 0.1em;
			text-align: left;
			text-transform: uppercase;
		}

		input,
		select,
		textarea,
		.dropzone__area {
			border-radius: ${props => props.theme.borderRadiusInput};
			display: block;
			min-height: 56px;
			padding: ${props =>
        props.theme.spacingSmall + ` ` + props.theme.spacingDefault};
			width: 100%;

			background-color: ${props => props.theme.white};
			border: 1px solid ${props => props.theme.grey500};
			color: ${props => props.theme.grey800};
			line-height: 1.5;
			transition: border-color 0.25s, box-shadow 0.25s;

			&::placeholder {
				color: ${props => props.theme.grey600};
				opacity: 1;
				text-transform: capitalize;
			}

			&[disabled],
			&[readonly] {
				background-color: ${props => props.theme.grey300};
				cursor: not-allowed;
			}

			&:focus {
				border: 1px solid ${props => props.theme.grey900};
			}
		}

		textarea {
			padding: ${props => props.theme.spacingDefault};
		}

		textarea {
			max-width: 100%;
			min-height: 200px;
			resize: vertical;
		}
	}

	img,
	video {
		max-width: 100%;
	}

	.wrapper {
		margin: 0 auto;
	}

	.wrapper {
		/* Fix anchor scroll positioning */
		[id]::before {
			display: block;
			content: '';
			margin-top: -4rem;
			height: 4rem;
		}
	}

	/* TABLE */

	.table {
		border-collapse: collapse;
		overflow-x: auto;
		width: 100%;

		color: ${props => props.theme.black};
		text-align: left;

		@media ${device.MXmd} {
			display: block;
		}

		.tc--auto {
			min-width: auto;
		}

		caption {
			padding: ${props =>
        props.theme.spacingDefault + ` ` + props.theme.spacingSmall};
			background-color: ${props => props.theme.grey700};
			color: ${props => props.theme.white};
			font-weight: 700;
			text-align: left;
		}

		td,
		th {
			min-width: 150px;
			padding: ${props =>
        props.theme.spacingDefault + ` ` + props.theme.spacingSmall};
		}

		th {
			background-color: ${props => props.theme.grey100};
			font-weight: bold;
			letter-spacing: 1.5px;
			text-transform: uppercase;
		}

		tr th[scope="row"] {
			letter-spacing: initial;
			text-transform: initial;
		}

		tr, tr th {
			background-color: ${props => props.theme.white};
			border-top: 1px solid ${props => props.theme.grey200};
			transition: background-color 0.2s ease;

			&:active,
			&:focus,
			&:hover {
				background-color: ${props => props.theme.grey200};

				th {
					background-color: ${props => props.theme.grey200};
				}

				.table__actions {
					opacity: 1;
				}
			}
		}

		.table__actions {
			@media ${device.md} {
				opacity: 0.2;
				transition: 0.4s all ease;
			}

			button {
				${ButtonReset}
			}

			a,
			button {
				display: inline-block;

				cursor: pointer;

				&:active,
				&:focus,
				&:hover {
					text-decoration: underline;
				}

				+ a,
				+ button {
					margin-left: 8px;
					padding-left: 8px;
					border-left: 1px solid ${props => props.theme.grey200};
				}
			}
		}

		.table__currency {
			text-align: right;
		}
	}

	.wrapper {
		flex: 1;
		overflow: hidden;
		width: 100%;
	}

	.embed {
		height: 0;
		position: relative;
		padding-top: 56.25%; /* 16:9 */

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}


	.hide,
	.hidden {
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 1px; width: 1px;
		margin: -1px; padding: 0; border: 0;
	}

	.bold {
		font-weight: bold !important;
	}

	.capitalize,
	.text--capitalize {
		text-transform: capitalize;
	}

	.lowercase,
	.text--lowercase {
		text-transform: lowercase;
	}

	.click-through {
		pointer-events: none;
	}

	.display--block { display: block; }
	.display--inline { display: inline; }
	.display--inline-block { display: inline-block; }

	.grid {
		margin: 0 auto;
		max-width: 1800px;
		padding: 0 30px;
		width: 100%;

		@media ${device.sm} {
			padding: 0 60px;
		}

		@media ${device.md} {
			padding: 0 10%;
		}

		@media ${device.xl} {
			padding: 0 100px;
		}
	}
`

export default GlobalStyle
