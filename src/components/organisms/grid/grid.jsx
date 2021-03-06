import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

import StyledGrid from "./grid.styles"

import ParseHTML from "particles/parseHTML"
import AnimateLetters from "particles/text/animate-letters"

const inViewConfig = {
  threshold: 1,
  triggerOnce: true,
}

const Grid = ({ rows, title, type }) => {
  const hasRows = rows && rows.length > 0
  if (!hasRows) return null

  const [ref, inView, entry] = useInView(inViewConfig)

  return (
    <StyledGrid>
      <div className="grid">
        {title && (
          <h2 className="grid__title" ref={ref}>
            <AnimateLetters inView={inView}>{title}</AnimateLetters>
          </h2>
        )}
        <div className="grid__contents">
          {rows.map(row => (
            <Row {...row} />
          ))}
        </div>
      </div>
    </StyledGrid>
  )
}

const Row = ({ body, content, subtitle, title }) => {
  const [ref, inView, entry] = useInView(inViewConfig)
  const className = !inView ? `grid__row` : `grid__row grid__row--show`

  return (
    <div className={className} ref={ref}>
      <div className="col col-1" />
      {content && <div className="col col-2">{ParseHTML(content)}</div>}
      {!content && (
        <div className="col col-2">
          {subtitle && <h3 className="col__subtitle">{subtitle}</h3>}
          {title && <h2 className="col__title">{title}</h2>}
          {body && <div className="col__body">{ParseHTML(body)}</div>}
        </div>
      )}
    </div>
  )
}

export default Grid
