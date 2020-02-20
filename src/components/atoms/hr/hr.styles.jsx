import styled from "styled-components"

const hrMargin = props => {
  if (!props || !props.variant) return `24px auto`

  // Dynamically determine the margin based on props
  let margin
  switch (props.variant) {
    case "x-large":
      margin = `48px auto`
      break
    case "large":
      margin = `36px auto`
      break
    case "default":
      margin = `24px auto`
      break
    case "small":
      margin = `12px auto`
      break
    default:
      margin = `24px auto`
      break
  }
  return margin
}

const hrWidth = props => {
  if (!props || !props.width) return `100%`

  let amount = props.width
  if (props.width > 2560) amount = 2560
  if (props.width < 300) amount = 300
  return `${amount}px`
}

const StyledHR = styled.hr`
  height: 1px;
  margin: ${props => hrMargin(props)};
  max-width: ${props => hrWidth(props)};
  width: 100%;

  border: none;
  background-color: ${props => props.theme.grey600};
  color: ${props => props.theme.grey600};
`

export default StyledHR
