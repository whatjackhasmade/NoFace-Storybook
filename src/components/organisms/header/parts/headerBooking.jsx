import React, { useContext, useEffect, useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { hasBrowser } from "@helpers"

import bookingNavigation from "./navigation.booking.json"

import ApplicationContext from "@particles/context/applicationContext"

import IconChevronRight from "@assets/icons/fa/chevron-right.svg"
import IconTimes from "@assets/icons/fa/times.svg"

import CURRENT_USER_CART_QUERY from "@queries/cart/CURRENT_USER_CART_QUERY"

import Link from "@atoms/link/link"

import Error from "@molecules/error/error"

const goodDate = dateVal => dateVal && new Date(dateVal).getHours() !== 0

const HeaderBooking = ({ navigation, stage = 1, toggleMenu }) => {
  const [canContinue, setContinue] = useState(false)
  const { state, dispatch } = useContext(ApplicationContext)
  const { data, loading, error } = useQuery(CURRENT_USER_CART_QUERY)

  useEffect(() => {
    if (error) console.error(error)

    if (!loading && !error && data) {
      const cart = data?.currentUserCart
      const postcode = cart?.postcode
      const latitude = cart?.latitude
      const longitude = cart?.longitude
      const address = cart?.address
      const contactName = cart?.contactName
      const mobile = cart?.mobile

      const datetime = cart?.datetime
      const datetimeTrial = cart?.datetimeTrial
      const services = cart?.services

      const artists = cart?.artists
      const hasArtists = artists.length > 0
      const hasTrial =
        services && services.some(({ service }) => service.type === `Trial`)

      const reqsOne =
        postcode && latitude && longitude && address && contactName && mobile
      const reqsTwo = services && services.length > 0
      const reqsFour = artists && hasArtists
      const reqsFive = state?.booking?.acceptedTOS

      switch (stage) {
        case 1:
          if (reqsOne) setContinue(reqsOne)
          break
        case 2:
          if (reqsTwo) setContinue(reqsTwo)
          break
        case 3:
          let reqsThree = false
          if (!hasTrial && goodDate(datetime)) reqsThree = true
          if (hasTrial && goodDate(datetime) && goodDate(datetimeTrial))
            reqsThree = true
          setContinue(reqsThree)
          break
        case 4:
          setContinue(reqsFour)
          break
        case 5:
          setContinue(reqsFive)
          break
        default:
          setContinue(false)
          break
      }
    }
  }, [canContinue, data, error, loading, stage, state])

  if (error) return <Error error={error} />

  let className = `header__navigation__continue header__navigation__continue--disabled`
  if (canContinue) className = `header__navigation__continue`

  const href = bookingNavigation[stage]?.href
  const text = bookingNavigation[stage]?.text

  const handleClick = e => {
    e.preventDefault()
    toggleMenu(false)
    if (hasBrowser) document.documentElement.classList.remove(`scroll--fixed`)
  }

  return (
    <nav className="header__navigation">
      {href && text && (
        <Link className={className} href={href} key={`header-nav-${text}`}>
          <span>{loading ? `Loading...` : text}</span>
          <IconChevronRight />
        </Link>
      )}
      <button className="header__toggle" onClick={handleClick}>
        <IconTimes /> Close Menu
      </button>
    </nav>
  )
}

export default HeaderBooking
