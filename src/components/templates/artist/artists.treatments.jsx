import React from "react"

import StyledTreatment from "./artists.treatments.styles"
import ArtistService from "./artists.service"

import Heading from "@atoms/heading/heading"

const ArtistTreatments = ({ id, name, services }) => {
  if (!services) return null

  const group = services.reduce((acc, item) => {
    if (!acc[item.service.treatment.title]) {
      acc[item.service.treatment.title] = []
    }

    acc[item.service.treatment.title].push(item)
    return acc
  }, {})

  return Object.keys(group).map((key, index) => (
    <StyledTreatment key={key}>
      <div className="services__intro">
        <div>
          <Heading level={3} variant={3}>
            {key} treatments
          </Heading>
        </div>
      </div>
      <section className="services__list">
        {group[key].map(userService => {
          return (
            <ArtistService
              key={userService.id}
              name={name}
              service={userService.service}
              userService={userService}
            />
          )
        })}
      </section>
    </StyledTreatment>
  ))
}

export default ArtistTreatments
