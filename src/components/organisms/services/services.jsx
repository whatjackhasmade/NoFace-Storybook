import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"

import StyledServices, { StyledService } from "./services.styles"

import IconCircles from "./assets/circles.svg"
import IconSquare from "./assets/square.svg"
import IconSquares from "./assets/squares.svg"
import IconTarget from "./assets/target.svg"

import AnimateLetters from "particles/text/animate-letters"

import Link from "atoms/link/link"

const inViewConfig = {
  threshold: 0.5,
  triggerOnce: true,
}

const Services = ({ services }) => (
  <StyledServices className="services">
    <div className="grid">
      <ServicesIntro />
      <div className="services__items">
        {services.map(({ colour, description, href, title, type }, i) => (
          <SingleService colour={colour} href={href} index={i + 1} type={type}>
            <h3>{title}</h3>
            <p className="service__description">{description}</p>
          </SingleService>
        ))}
      </div>
    </div>
  </StyledServices>
)

const ServicesIntro = () => {
  const [ref, inView, entry] = useInView(inViewConfig)

  return (
    <div className="services__intro" ref={ref}>
      <h2>
        <AnimateLetters inView={inView}>
          Our specialized teams lead the product design and development process
          for high growth companies.
        </AnimateLetters>
      </h2>
      <h3>What We Do</h3>
    </div>
  )
}

const SingleService = ({
  children,
  colour = `#50e3c2`,
  href,
  index = 1,
  type,
}) => {
  const [ref, inView, entry] = useInView(inViewConfig)

  let className = `service service--${type}`
  if (inView) className += ` service--inview`

  return (
    <StyledService className={className} colour={colour} ref={ref}>
      <Link aria-label="Learn more" href={href}>
        {type === `app` && <IconSquare />}
        {type === `product` && <IconCircles />}
        {type === `company` && <IconTarget />}
        {type === `scale` && <IconSquares />}
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
      <span className="hide">Learn more</span>
      <svg viewBox="0 0 23 15">
        <path d="M20.077 8.307H0V6.754h20.137L14.63 1.098 15.7 0 23 7.5 15.7 15l-1.069-1.098z" />
      </svg>
    </div>
  </div>
)

export default Services
