import React from "react"
import { bool, func, node, string } from "prop-types"

import StyledButton from "./button.styles"

import Link from "atoms/link/link"

const Button = props => {
  const { children, className, disabled, href } = props
  const { onClick, type, value, variant } = props

  let classList = `button `
  if (className) classList = classList + className

  if (!href)
    return (
      <StyledButton disabled={disabled} variant={variant}>
        <button
          {...props}
          className={classList}
          onClick={onClick}
          value={value ? value : children}
        >
          {children}
        </button>
      </StyledButton>
    )

  return (
    <StyledButton disabled={disabled} variant={variant}>
      <Link {...props} className={classList} href={href}>
        {children}
      </Link>
    </StyledButton>
  )
}

// Expected prop values
Button.propTypes = {
  background: string,
  children: node,
  className: string,
  disabled: bool,
  href: string,
  onClick: func,
  size: string,
  target: string,
  type: string,
  variant: string,
}

// Default prop values
Button.defaultProps = {
  children: `Button text`,
  variant: `primary`,
}

export default Button
