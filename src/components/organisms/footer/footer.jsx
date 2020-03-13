import React from "react"
import { Formik } from "formik"
import { generateID } from "helpers"

import StyledFooter from "./footer.styles"

import Logo from "assets/images/logo.svg"

import Link from "atoms/link/link"

const Footer = ({ email, menus, telephone }) => {
  const hasMenus = menus?.length > 0
  if (!hasMenus) return null

  return (
    <StyledFooter>
      <div className="grid">
        <section className="footer__company">
          <div className="footer__logo">
            <Link href="/">
              <Logo />
              <h5 className="hide">NoFace Website Development</h5>
            </Link>
          </div>
          <div className="footer__description">
            <p>
              NoFace <span className="hide">Website Development</span>
            </p>
            <p>Established 2017.</p>
            <h2>Bournemouth & Hampshire</h2>
          </div>
        </section>
        <section className="footer__menus">
          {menus.map(menu => (
            <FooterNav key={`footer-menu-${generateID()}`} menu={menu} />
          ))}
        </section>
      </div>
    </StyledFooter>
  )
}

const FooterNav = ({ menu }) => {
  const items = menu?.menuItems?.nodes
  const title = menu?.title
  if (!items) return null
  const hasItems = items.length > 0
  if (!hasItems) return null

  return (
    <nav className="footer__navigation">
      {title && <h2>{title}</h2>}
      {items.map(({ id, label, url }) => (
        <Link href={url} key={`footer-item-${generateID()}`}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Footer
