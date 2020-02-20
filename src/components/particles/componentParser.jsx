import React from "react"
import { isEmptyObject, generateID } from "@helpers"

import ParseHTML from "./parseHTML"

const components = {
  // "acf/textbreak": TextBreak,
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
