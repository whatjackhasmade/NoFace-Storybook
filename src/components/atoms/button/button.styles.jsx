import styled from "styled-components"
import buttonReset from "./button.reset"

const buttonBackground = props => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary) return `#4E2ECD`

  // If a background value is specified, use that instead of theme
  if (props.background) return props.background

  // If no variant is specified, return the primary colour in our theme
  if (!props.variant) return props.theme.primary

  // Dynamically determine the background colour based on props
  let colour
  switch (props.variant) {
    case `primary`:
      colour = props.theme.primary
      break
    case `secondary`:
      colour = props.theme.secondary
      break
    case `black`:
      colour = props.theme.black
      break
    case `grey`:
      colour = props.theme.grey700
      break
    case `green`:
      colour = props.theme.green
      break
    case `purple`:
      colour = props.theme.purple
      break
    case `disabled`:
      colour = props.theme.grey400
      break
    case `ghost-white`:
      colour = `transparent`
      break
    case `ghost-grey`:
      colour = `transparent`
      break
    case `ghost`:
      colour = `transparent`
      break
    default:
      colour = props.theme.primary600
      break
  }

  return colour
}

const buttonBorder = props => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary) return `#4E2ECD`

  // If a background value is specified, use that instead of theme
  if (props.background) return props.background

  // If no variant is specified, return the primary colour in our theme
  if (!props.variant) return props.theme.primary

  // Dynamically determine the background colour based on props
  let colour
  switch (props.variant) {
    case `primary`:
      colour = `transparent`
      break
    case `secondary`:
      colour = `transparent`
      break
    case `black`:
      colour = `transparent`
      break
    case `grey`:
      colour = `transparent`
      break
    case `green`:
      colour = `transparent`
      break
    case `purple`:
      colour = `transparent`
      break
    case `disabled`:
      colour = `transparent`
      break
    case `ghost-white`:
      colour = props.theme.white
      break
    case `ghost-grey`:
      colour = props.theme.grey700
      break
    case `ghost`:
      colour = `transparent`
      break
    default:
      colour = props.theme.primary600
      break
  }

  return colour
}

const buttonColour = props => {
  // Fallback value if we can't get access to props
  if (!props || !props.theme || !props.theme.primary) return `white`

  // If no variant is specified, return the white colour
  if (!props.variant) return `white`

  // Dynamically determine the background colour based on props
  let colour
  switch (props.variant) {
    case `primary`:
      colour = props.theme.white
      break
    case `secondary`:
      colour = props.theme.white
      break
    case `black`:
      colour = props.theme.white
      break
    case `grey`:
      colour = props.theme.white
      break
    case `green`:
      colour = props.theme.white
      break
    case `purple`:
      colour = props.theme.white
      break
    case `disabled`:
      colour = props.theme.white
      break
    case `ghost-white`:
      colour = props.theme.white
      break
    case `ghost-grey`:
      colour = props.theme.grey700
      break
    case `ghost`:
      colour = props.theme.grey700
      break
    default:
      colour = props.theme.primary600
      break
  }

  return colour
}

export const StyledButton = styled.span`
  button {
    ${buttonReset}
  }

  &:active,
  &:focus,
  &:hover {
    text-decoration: none;
  }

  &[disabled] {
    cursor: not-allowed;

    a,
    button {
      background-color: ${props => props.theme.grey400};
      color: ${props => props.theme.white};
      pointer-events: none;
    }
  }

  a,
  button {
    align-items: center;
    display: inline-flex;
    overflow: hidden;
    padding: ${props => (props.size === `small` && `10px 12px`) || `16px 20px`};
    position: relative;
    width: auto;

    background-color: ${props => buttonBackground(props)};
    border-radius: 3px;
    border: 1px solid ${props => buttonBorder(props)};
    color: ${props => buttonColour(props)};
    cursor: pointer;
    font-size: ${props => (props.size === `small` && `14px`) || `18px`};
    font-weight: bold;

    line-height: 22px;
    text-align: center;
    text-decoration: none;
    transition: 0.2s background-color ease;

    &:disabled {
      background-color: ${props => props.theme.grey400};
      color: ${props => props.theme.white};
      cursor: not-allowed;
      pointer-events: none;
    }

    &:active,
    &:focus,
    &:hover {
      text-decoration: none;
    }

    svg {
      height: 20px;
      margin-left: 8px;

      fill: currentColor;
    }
  }
`

export default StyledButton
