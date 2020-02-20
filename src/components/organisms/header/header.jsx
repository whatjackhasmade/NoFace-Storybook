import React, { useState } from "react"
import { arrayOf, number, shape, string } from "prop-types"
import { hasBrowser } from "@helpers"

import StyledHeader from "./header.styles"

import HeaderBooking from "./parts/headerBooking"
import HeaderBookingProgress from "./parts/headerBookingProgress"
import HeaderDefault from "./parts/headerDefault"

import IconBars from "@assets/icons/fa/bars.svg"
import Logo from "@assets/images/logo.svg"

import Link from "@atoms/link/link"

const Header = ({ menus }) => {
  const [menuOpen, toggleMenu] = useState(false)
  let className = `header`
  className = menuOpen ? className : `${className} header--closed`

  return (
    <StyledHeader className={className} elementTheme={theme}>
      <div className="header__logo">
        <Link href={homeURL}>
          <Logo />
          <h5 className="hide">NoFace Website Development</h5>
        </Link>
      </div>
      <button
        className="header__toggle"
        onClick={() => {
          toggleMenu(!menuOpen)
          if (hasBrowser)
            document.documentElement.classList.toggle(`scroll--fixed`)
        }}
      >
        <IconBars />
        {menuOpen ? `Close` : `Open`} Menu
      </button>
    </StyledHeader>
  )
}

// Expected prop values
Header.propTypes = {
  menus: shape({
    one: shape({
      id: string,
      count: number,
      menuItems: shape({
        nodes: arrayOf(
          shape({
            label: string.isRequired,
            target: string,
            url: string.isRequired,
          })
        ),
      }),
    }),
  }),
}

// Default prop values
Header.defaultProps = {
  booking: false,
  homeURL: `/`,
  menus: {
    one: {
      menuItems: {
        nodes: [],
      },
    },
  },
  theme: `default`,
}

export default Header
