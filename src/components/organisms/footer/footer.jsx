import React from "react"
import { Formik } from "formik"

import StyledFooter from "./footer.styles"

import IconEmail from "assets/icons/fa/solid/envelope.svg"
import IconLinkedin from "assets/icons/brands/linkedin.svg"
import IconTwitter from "assets/icons/brands/twitter.svg"

import Logo from "assets/images/logo.svg"

import Link from "atoms/link/link"

const Footer = ({ email, menus, telephone }) => {
  const hasMenus = menus?.length > 0
  if (!hasMenus) return null
  const socialMenu = menus.find(menu => menu.slug === `footer-social`)
  const standardMenus = menus.filter(menu => menu.slug !== `footer-social`)

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
        </section>
        <section className="footer__menus">
          {standardMenus.map(menu => (
            <FooterNav menu={menu} isSocial={false} />
          ))}
          {socialMenu && <FooterNav menu={socialMenu} isSocial={true} />}
        </section>
      </div>
    </StyledFooter>
  )
}

const FooterNav = ({ menu, isSocial }) => {
  const items = menu?.menuItems?.nodes
  const title = menu?.title
  if (!items) return null
  const hasItems = items.length > 0
  if (!hasItems) return null

  const className = isSocial ? `footer__social` : `footer__navigation`

  return (
    <nav className={className}>
      {title && <h2 className={isSocial ? `hide` : undefined}>{title}</h2>}
      {items.map(({ id, label, url }) => (
        <Link href={url} key={id}>
          {!isSocial ? label : <NavIcon name={label} />}
        </Link>
      ))}
    </nav>
  )
}

// Assign SVGs to object with named keys
const Icons = {
  email: IconEmail,
  linkedin: IconLinkedin,
  twitter: IconTwitter,
}

const NavIcon = ({ name }) => {
  name = name.toLowerCase()
  // If icon name value doesn't match Icons object keys then return null
  if (Icons[name] === undefined) return null
  // If icon found, return the icon in a span element
  const Icon = Icons[name]
  return (
    <span className="button__icon">
      <span className="hide">{name}</span>
      <Icon />
    </span>
  )
}

export default Footer
