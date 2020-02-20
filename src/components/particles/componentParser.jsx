import React from "react"
import { isEmptyObject, generateID } from "@helpers"

import ParseHTML from "./parseHTML"

import TextBreak from "@molecules/text-break/textBreak"

import Archive from "@organisms/archive/archive"
import Banner from "@organisms/banner/banner"
import GridGallery from "@organisms/grid/gridGallery"
import Hero from "@organisms/hero/hero"
import Logos from "@organisms/logos/logos"
import Rows from "@organisms/rows/rows"
import Steps from "@organisms/steps/steps"
import Team from "@organisms/team/team"
import TeamArchive from "@organisms/team/archive"
import Treatments from "@organisms/treatments/treatments"

const components = {
  "acf/textbreak": TextBreak,
  "acf/archive": Archive,
  "acf/banner": Banner,
  "acf/gridgallery": GridGallery,
  "acf/hero": Hero,
  "acf/logos": Logos,
  "acf/rows": Rows,
  "acf/services": Treatments,
  "acf/steps": Steps,
  "acf/team": Team,
  "acf/teamarchive": TeamArchive,
}

const convertACFProps = component => {
  // get all object keys and iterate over them
  Object.keys(component).forEach(key => {
    if (key.includes(`Fields`)) {
      component.data = component[key]
      delete component[key]
    }
  })

  return component
}

const ComponentParser = props => {
  let { content } = props

  if (!content) return null
  const filteredComponents = content.filter(
    component =>
      !component || !isEmptyObject(component) || component.name !== null
  )

  if (filteredComponents && filteredComponents.length > 0) {
    const pageComponents = filteredComponents.map((component, index) => {
      const Component = components[component.name]

      if (!Component) return ParseHTML(component.originalContent)

      component = convertACFProps(component)

      return (
        <Component
          index={index}
          key={generateID(`component`)}
          {...component}
          {...component.data}
          {...component.attributes}
        />
      )
    })

    if (pageComponents) {
      return pageComponents
    }
  }
  return null
}

export default ComponentParser
