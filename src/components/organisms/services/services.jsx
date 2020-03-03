import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"

import StyledServices from "./services.styles"

import Link from "atoms/link/link"

const inViewConfig = {
  threshold: 0.5,
  triggerOnce: true
}

const Services = () => (
  <StyledServices className="services">
    <div className="grid grid--wide">
      <div className="services__intro">
        <h2>
          Our specialized teams lead the product design and development process
          for high growth companies.
        </h2>
        <h3>What We Do</h3>
      </div>
      <div className="services__items">
        <ServiceApp />
        <ServiceProduct />
        <ServiceCompany />
        <ServiceScale />
      </div>
    </div>
  </StyledServices>
)

const ServiceApp = () => {
  const [ref, inView, entry] = useInView(inViewConfig)

  let className = `service service--app`
  if (inView) className += ` service--inview`

  return (
    <div className={className} ref={ref}>
      <Link aria-label="Learn more" href="/services/design-new-product/">
        <svg viewBox="0 0 78 100" preserveAspectRatio="xMinYMid meet">
          <rect x={1} y={15} width={70} height={70} rx={12} ry={12} />
          <circle cx="64.5" cy="18.5" r={12} />
          <circle cx="64.5" cy="18.5" r={7} />
        </svg>
        <span className="service__index">1</span>
        <h3>Design a new product</h3>
        <p className="service__description">
          Design and develop an industry leading product.
        </p>
        <LearnMore />
      </Link>
    </div>
  )
}

const ServiceProduct = () => {
  const [ref, inView, entry] = useInView(inViewConfig)

  let className = `service service--product`
  if (inView) className += ` service--inview`

  return (
    <div className={className} ref={ref}>
      <Link aria-label="Learn more" href="/services/improve-existing-product/">
        <svg viewBox="0 0 60 100" preserveAspectRatio="xMinYMid meet">
          <circle cx={30} cy={35} r={29} />
          <circle cx={30} cy={50} r={29} />
          <circle cx={30} cy={65} r={29} />
        </svg>
        <span className="service__index">2</span>
        <h3>Improve an existing product</h3>
        <p className="service__description">
          Focus, prioritize, and turn your product into a category leader.
        </p>
        <LearnMore />
      </Link>
    </div>
  )
}

const ServiceCompany = () => {
  const [ref, inView, entry] = useInView(inViewConfig)

  let className = `service service--company`
  if (inView) className += ` service--inview`

  return (
    <div className={className} ref={ref}>
      <Link aria-label="Learn more" href="/services/launch-new-company/">
        <svg viewBox="0 0 90 90" preserveAspectRatio="xMinYMid meet">
          <circle cx={45} cy={45} r={13} />
          <circle cx={45} cy={45} r={28} />
          <circle cx={45} cy={45} r={43} />
        </svg>
        <span className="service__index">3</span>
        <h3>Launch a new company</h3>
        <p className="service__description">
          Take your vision from concept to launch.
        </p>
        <LearnMore />
      </Link>
    </div>
  )
}

const ServiceScale = () => {
  const [ref, inView, entry] = useInView(inViewConfig)

  let className = `service service--scale`
  if (inView) className += ` service--inview`

  return (
    <div className={className} ref={ref}>
      <Link aria-label="Learn more" href="/services/project-based-consulting/">
        <svg viewBox="0 0 80 100" preserveAspectRatio="xMinYMid meet">
          <rect x={32} y={12} width={45} height={45} rx={7} ry={7} />
          <rect x={17} y={28} width={45} height={45} rx={7} ry={7} />
          <rect x={1} y={43} width={45} height={45} rx={7} ry={7} />
        </svg>
        <span className="service__index">4</span>
        <h3>Product consulting</h3>
        <p className="service__description">
          Accelerate your strategic planning process.
        </p>
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
