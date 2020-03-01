import React from "react"
import { Formik } from "formik"

import StyledFooter from "./footer.styles"

import Link from "atoms/link/link"

const Footer = ({ email, menus, telephone }) => <footer></footer>

const FooterNav = ({ menu }) => {
  const { menuItems } = menu
  const { nodes } = menuItems

  if (!nodes) return null

  return (
    <nav className="footer__navigation">
      {nodes.length > 0 &&
        nodes.map(({ id, label, url }) => (
          <Link href={url} key={id}>
            {label}
          </Link>
        ))}
    </nav>
  )
}

export default Footer
