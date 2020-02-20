import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { hasBrowser, hasPermission, hideName } from "@helpers"

import CURRENT_USER_QUERY from "@queries/user/CURRENT_USER_QUERY"

import Link from "@atoms/link/link"

import Error from "@molecules/error/error"
import Loader from "@molecules/loader/loader"
import Signout from "@molecules/signout/signout"
import hasRequirement from "@particles/helpers/hasRequirement"

const AccountNavigation = ({ item, toggleMenu }) => {
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY)
  if (loading) return null
  if (error) return <Error error={error} />
  if (!loading && !error && !data.currentUser) return null
  if (!loading && !error)
    return (
      <Navigation item={item} toggleMenu={toggleMenu} user={data.currentUser} />
    )
}

const Navigation = ({ item, toggleMenu, user }) => {
  const { name, permissions } = user

  if (!permissions)
    return (
      <Link
        href="/register"
        key={`header__navigation__${item.title}`}
        onClick={() => {
          toggleMenu(false)
          if (hasBrowser)
            document.documentElement.classList.remove(`scroll--fixed`)
        }}
      >
        <span>{item.title}</span>
      </Link>
    )

  return (
    <span className="header__account" key={`header__navigation__${item.title}`}>
      <Link
        href="/account"
        key={`header__navigation__${item.title}`}
        onClick={() => {
          toggleMenu(false)
          if (hasBrowser)
            document.documentElement.classList.remove(`scroll--fixed`)
        }}
      >
        {hideName(name)}
      </Link>
      <nav>
        <ul>
          {hasPermission(user, `TEAM`) && hasRequirement(user, `any`) && (
            <li>
              <Link href="/dashboard/setup">Setup Account</Link>
            </li>
          )}
          {hasPermission(user, `TEAM`) && (
            <li>
              <Link href="/dashboard/calendar">My Calendar</Link>
            </li>
          )}
          {(hasPermission(user, `TEAM`) || hasPermission(user, `ADMIN`)) && (
            <li>
              <Link href="/dashboard/booking">My Dashboard</Link>
            </li>
          )}
          <li>
            <Link href="/account">Account</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
          <li>
            <Signout className="header__logout">Sign Out</Signout>
          </li>
        </ul>
      </nav>
    </span>
  )
}

export default AccountNavigation
