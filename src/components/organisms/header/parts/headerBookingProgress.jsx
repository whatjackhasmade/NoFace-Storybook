import React, { useState } from "react"
import date from "date-and-time"
import { useQuery } from "@apollo/react-hooks"
import { hideName } from "@helpers"
import "date-and-time/plugin/ordinal"
date.plugin(`ordinal`)

import bookingNavigation from "./navigation.booking.json"

import IconCheck from "@assets/icons/fa/check.svg"
import IconChevronDown from "@assets/icons/fa/chevron-down.svg"

import CURRENT_USER_CART_QUERY from "@queries/cart/CURRENT_USER_CART_QUERY"

import Button from "@atoms/button/button"
import Link from "@atoms/link/link"

import Error from "@molecules/error/error"

const hasHours = dateObject => {
  return dateObject.getHours() !== 0
}

const HeaderBookingProgress = ({ stage = 1 }) => {
  const [show, setShow] = useState(false)
  const { data, loading, error } = useQuery(CURRENT_USER_CART_QUERY)

  if (loading) return null
  if (error) console.error(error)
  if (error) return <Error error={error} />

  const cart = data?.currentUserCart
  const { artists, datetime, postcode, services } = cart
  const hasArtists = artists && artists.length > 0
  const hasServices = services && services.length > 0

  const orderNavigation = (initial, stage) => {
    switch (stage) {
      case 0:
        if (!postcode) return initial
        if (postcode) return postcode
        break
      case 1:
        if (hasServices) {
          const servicesList = (
            <Button
              key={`header__navigation__${bookingNavigation[1].text}`}
              href={bookingNavigation[1].href}
            >
              Services Added
              <IconCheck />
            </Button>
          )
          return servicesList
        }
        if (!hasServices) {
          const servicesLink = (
            <Link
              className="disabled"
              key={`header__navigation__${bookingNavigation[1].text}`}
              href={bookingNavigation[1].href}
            >
              {initial}
              {` `}
              <IconChevronDown />
            </Link>
          )
          return servicesLink
        }
        break
      case 2:
        if (!datetime) return initial

        const dateObject = new Date(datetime)
        const dayOfMonth = date.format(dateObject, `DDD`, true)
        const month = date.format(dateObject, `MMM`, true)
        const time = date.format(dateObject, `h:mm A`, true)

        const niceDate = `${dayOfMonth} ${month}`
        const niceDateTime = `${dayOfMonth} ${month} ${time}`

        if (hasHours(dateObject)) return niceDate
        if (!hasHours(dateObject)) return niceDateTime

        break
      case 3:
        if (!hasArtists) return initial
        return artists.map(({ user }, i) => (
          <span key={user.id}>
            {i > 0 ? ` + ` : ``}
            {hideName(user.name)}
          </span>
        ))
        break
      case 4:
        return initial
        break
      case 5:
        return initial
        break
      case 6:
        return initial
        break
      default:
        return initial
    }

    return initial
  }

  const hideProgress = e => {
    setShow(false)
  }

  const handleClick = e => {
    e.preventDefault()
    setShow(!show)
  }

  let className = `header__progress`
  if (show) className = `header__progress header__progress--show`
  const classNameToggle = `header__progress__toggle`

  return (
    <nav className={className}>
      <Button className={classNameToggle} onClick={handleClick} theme="grey">
        Show Booking Progress
      </Button>
      <div className="header__progress__contents">
        {bookingNavigation &&
          bookingNavigation.map(({ href, text }, i) => {
            if (i === 1) return orderNavigation(`${i + 1}. ${text}`, i)
            if (i !== 1) {
              return (
                <Link
                  className={stage - 1 < i ? `disabled` : undefined}
                  href={href}
                  key={`header__navigation__${text}`}
                  onClick={hideProgress}
                >
                  {orderNavigation(`${i + 1}. ${text}`, i)}
                  {` `}
                  {i < 4 ? <IconChevronDown /> : <IconCheck />}
                </Link>
              )
            }
          })}
      </div>
    </nav>
  )
}

export default HeaderBookingProgress
