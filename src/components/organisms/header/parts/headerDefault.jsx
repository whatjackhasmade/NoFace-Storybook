import React from "react"
import { arrayOf, number, shape, string } from "prop-types"
import { hasBrowser } from "@helpers"

import IconTimes from "@assets/icons/fa/times.svg"

import AccountNavigation from "./accountNavigation"

import Link from "@atoms/link/link"

const HeaderDefault = ({ menu, toggleMenu }) => {
  const { menuItems } = menu
  const { nodes } = menuItems

  return (
    <nav className="header__navigation">
      {nodes &&
        nodes.length > 0 &&
        nodes.map(item => {
          const { id, label, url } = item

          if (url !== `/account`) {
            return (
              <Link
                href={url}
                key={id}
                onClick={() => {
                  toggleMenu(false)
                  if (hasBrowser)
                    document.documentElement.classList.remove(`scroll--fixed`)
                }}
              >
                {label}
              </Link>
            )
          }

          return (
            <AccountNavigation
              key="header__account"
              item={item}
              toggleMenu={toggleMenu}
            />
          )
        })}
      <button
        className="header__toggle"
        onClick={e => {
          e.preventDefault()
          toggleMenu(false)
        }}
      >
        <IconTimes /> Close Menu
      </button>
    </nav>
  )
}

// Expected prop values
HeaderDefault.propTypes = {
  menu: shape({
    id: string,
    count: number,
    menuItems: shape({
      nodes: arrayOf(
        shape({
          items: arrayOf(
            shape({
              label: string.isRequired,
              target: string,
              url: string.isRequired,
            })
          ),
        })
      ),
    }),
  }),
}

HeaderDefault.defaultProps = {
  menu: {
    menuItems: {
      nodes: [],
    },
  },
}

export default HeaderDefault
