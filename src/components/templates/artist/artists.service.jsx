import React from "react"
import humanizeDuration from "humanize-duration"
import { formatMoney } from "@helpers"

import ParseHTML from "@particles/parseHTML"

import CTA from "@atoms/cta/cta"

const ArtistService = ({ id, name, service, userService }) => {
  const { description = ``, minimum = ``, time = 60, title = `` } = service

  const { cost } = userService

  return (
    <div className="service">
      <header className="service__header">
        <div className="service__titles">
          <h4 className="service__subtitle">
            Estimated Time to Complete: {humanizeDuration(time * 60000)}
          </h4>
          <h3 className="service__title">{title}</h3>
        </div>
      </header>
      <div className="service__price">
        {name} charges{` `}
        <span className="service__minimum">
          {cost ? formatMoney(cost) : formatMoney(minimum)}
        </span>{` `}
        for this service
      </div>
      <p className="service__description">{ParseHTML(description)}</p>
      <CTA href={`https://book.makeupandmane.com/book?artist=${id}`}>
        Book {title} with {name}
      </CTA>
    </div>
  )
}

export default ArtistService
