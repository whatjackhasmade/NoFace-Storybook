import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"
import SplitText from "react-pose-text"

import StyledServices from "./services.styles"

import IconCircles from "./assets/circles.svg"
import IconSquare from "./assets/square.svg"
import IconSquares from "./assets/squares.svg"
import IconTarget from "./assets/target.svg"

import Link from "atoms/link/link"

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 20,
  },
}

const inViewConfig = {
  threshold: 0.5,
  triggerOnce: true,
}

const Services = () => (
  <StyledServices className="services">
    <div className="grid grid--wide">
      <ServicesIntro />
      <div className="services__items">
        <SingleService href="/services/apps" index={1} type="app">
          <h3>Design a new product</h3>
          <p className="service__description">
            Design and develop an industry leading product.
          </p>
        </SingleService>
        <SingleService href="/services/products" index={2} type="product">
          <h3>Improve an existing product</h3>
          <p className="service__description">
            Focus, prioritize, and turn your product into a category leader.
          </p>
        </SingleService>
        <SingleService href="/services/company" index={3} type="company">
          <h3>Launch a new company</h3>
          <p className="service__description">
            Take your vision from concept to launch.
          </p>
        </SingleService>
        <SingleService href="/services/consulting" index={4} type="scale">
          <h3>Product consulting</h3>
          <p className="service__description">
            Accelerate your strategic planning process.
          </p>
        </SingleService>
      </div>
    </div>
  </StyledServices>
)

const ServicesIntro = () => {
  const [ref, inView, entry] = useInView(inViewConfig)

  return (
    <div className="services__intro" ref={ref}>
      <h2>
        <SplitText
          initialPose="exit"
          pose={inView ? `enter` : `exit`}
          charPoses={charPoses}
        >
          Our specialized teams lead the product design and development process
          for high growth companies.
        </SplitText>
      </h2>
      <h3>What We Do</h3>
    </div>
  )
}

const SingleService = ({ children, href, index = 1, type }) => {
  const [ref, inView, entry] = useInView(inViewConfig)

  let className = `service service--${type}`
  if (inView) className += ` service--inview`

  return (
    <div className={className} ref={ref}>
      <Link aria-label="Learn more" href={href}>
        {type === `app` && <IconSquare />}
        {type === `product` && <IconCircles />}
        {type === `company` && <IconTarget />}
        {type === `scale` && <IconSquares />}
        <span className="service__index">{index}</span>
        {children}
        <LearnMore />
      </Link>
    </div>
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
