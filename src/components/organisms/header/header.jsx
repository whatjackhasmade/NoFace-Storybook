import React, { useState } from "react"
import { arrayOf, number, shape, string } from "prop-types"
import { hasBrowser } from "helpers"

import StyledHeader from "./header.styles"

import IconBars from "assets/icons/fa/solid/bars.svg"
import Logo from "assets/images/logo.svg"

import Link from "atoms/link/link"

const Header = ({ menus }) => {
  const [menuOpen, toggleMenu] = useState(false)
  const hasMenus = menus?.length > 0
  if (!hasMenus) return null
  let className = `header`
  className = !menuOpen ? className : `${className} header--open`

  return (
    <StyledHeader className={className}>
      <div className="grid">
        <div className="header__logo">
          <Link href="/">
            <Logo />
            <h5 className="hide">NoFace Website Development</h5>
          </Link>
        </div>
        <nav className="header__navigation">
          <div className="header__menus">
            <div className="header__logo">
              <Link href="/">
                <Logo />
                <h5 className="hide">NoFace Website Development</h5>
              </Link>
            </div>
            <HeaderToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
            {menus.map(menu => (
              <HeaderNav menu={menu} />
            ))}
          </div>
          <HeaderToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </nav>
      </div>
    </StyledHeader>
  )
}

const HeaderNav = ({ menu }) => {
  const items = menu?.menuItems?.nodes
  if (!items) return null
  const hasItems = items.length > 0
  if (!hasItems) return null

  return (
    <nav className="header__menu">
      {items.map(({ id, label, url }) => (
        <Link href={url} key={id}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

const HeaderToggle = ({ menuOpen, toggleMenu }) => (
  <button
    className="header__toggle"
    onClick={() => {
      toggleMenu(!menuOpen)
      if (hasBrowser) document.documentElement.classList.toggle(`scroll--fixed`)
    }}
  >
    <IconBars />
    {menuOpen ? `Close` : `Open`} Menu
  </button>
)

export default Header
