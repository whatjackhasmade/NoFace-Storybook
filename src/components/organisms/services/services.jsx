import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

import StyledServices, { StyledService } from "./services.styles"

import IconLightbulb from "./assets/lightbulb.svg"
import IconSquare from "./assets/square.svg"
import IconSquares from "./assets/squares.svg"
import IconTarget from "./assets/target.svg"

import AnimateLetters from "particles/text/animate-letters"

import Link from "atoms/link/link"

const inViewConfig = {
  threshold: 0.5,
  triggerOnce: true,
}

const Services = ({ services, subtitle, title }) => (
  <StyledServices className="services">
    <div className="grid">
      <ServicesIntro subtitle={subtitle} title={title} />
      <div className="services__items">
        {services.map(({ colour, description, link, title, type }, i) => (
          <SingleService
            colour={colour}
            index={i + 1}
            key={`service-${title}`}
            link={link}
            type={type}
          >
            <h3>{title}</h3>
            <p className="service__description">{description}</p>
          </SingleService>
        ))}
      </div>
    </div>
  </StyledServices>
)

const ServicesIntro = ({ subtitle, title }) => {
  const [ref, inView, entry] = useInView(inViewConfig)

  return (
    <div className="services__intro" ref={ref}>
      <h2>
        <AnimateLetters inView={inView}>{title}</AnimateLetters>
      </h2>
      <h3>{subtitle}</h3>
    </div>
  )
}

const SECONDS = 1000
const animationLength = 4 * SECONDS

const SingleService = ({
  children,
  colour = `#50e3c2`,
  index = 1,
  link,
  type,
}) => {
  const [animated, setAnimated] = useState(false)
  const [ref, inView, entry] = useInView(inViewConfig)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(false), animationLength)
    return () => clearTimeout(timer)
  }, [animated])

  let className = `service service--${type}`
  if (animated) className += ` service--animating`
  if (inView) className += ` service--inview`

  return (
    <StyledService
      animationLength={animationLength}
      className={className}
      colour={colour}
      onFocus={() => setAnimated(() => true)}
      onMouseEnter={() => setAnimated(() => true)}
      ref={ref}
    >
      <Link aria-label="Learn more" href={link.url} target={link.target}>
        {link.title && (
          <span className="hidden">Click to view the {link.title} page</span>
        )}
        {type === `design` && <IconTarget />}
        {type === `improve` && <IconSquare />}
        {type === `launch` && <IconLightbulb />}
        {type === `consult` && <IconSquares />}
        <span className="service__index">{index}</span>
        {children}
        <LearnMore />
      </Link>
    </StyledService>
  )
}

const LearnMore = () => (
  <div className="service__arrow">
    <div className="service__arrow__contents">
      <span>Learn more</span>
      <svg viewBox="0 0 23 15">
        <path d="M20.077 8.307H0V6.754h20.137L14.63 1.098 15.7 0 23 7.5 15.7 15l-1.069-1.098z" />
      </svg>
    </div>
  </div>
)

export default Services
