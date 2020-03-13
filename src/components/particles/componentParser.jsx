import React from "react"
import { isEmptyObject, generateID } from "helpers"

import ParseHTML from "./parseHTML"

import Grid from "organisms/grid/grid"
import Hero from "organisms/hero/hero"
import Services from "organisms/services/services"
import Signposts from "organisms/signposts/signposts"
import Wrapper from "organisms/wrapper/wrapper"

const components = {
  "acf/grid": Grid,
  "acf/hero": Hero,
  "acf/services": Services,
  "acf/signposts": Signposts,
}

const wrapperArray = [
  `core/cover`,
  `core/heading`,
  `core/image`,
  `core/list`,
  `core/paragraph`,
  `core/quote`,
]

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

const ComponentParser = ({ content }) => {
  let wrapperGroup = []

  const hasNoContent = !content || content.length < 1
  if (hasNoContent) return null

  content = content.filter(
    component => component && component.name && component.name !== null
  )

  const hasContent = content && content.length > 0
  if (!hasContent) return null

  const pageComponents = content.map((component, index) => {
    if (isEmptyObject(component) || !component) return null

    // Get the component name, trimming prefixes
    const Component = components[component.name]

    // Unpack the ACF fields
    component = convertACFProps(component)

    // If the component is an 'article' component, then add it to an article group
    if (wrapperArray.includes(component.name)) {
      wrapperGroup = [...wrapperGroup, component]

      // If it's the last component, add all the components to an 'Article' wrapper component
      if (index === content.length - 1) {
        return (
          <Wrapper
            key={`component-${generateID()}`}
            components={wrapperGroup}
          />
        )
      }
    }

    // If the component isn't an 'article' component, add all the 'article' components to an 'Article' wrapper component and then output the current component afterwards
    if (!wrapperArray.includes(component.name) && wrapperGroup.length) {
      const wrapperComponents = [...wrapperGroup]
      wrapperGroup = []
      return (
        <React.Fragment key={`component-${generateID()}`}>
          <Wrapper components={wrapperComponents} />
          <Component index={index} {...component.data} />
        </React.Fragment>
      )
    }

    if (!Component) return null

    return (
      <Component
        index={index}
        key={`component-${generateID()}`}
        {...component}
        {...component.data}
        {...component.attributes}
      />
    )
  })
  if (pageComponents) return pageComponents
}

export default ComponentParser
