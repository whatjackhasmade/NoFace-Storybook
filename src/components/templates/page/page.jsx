import React from "react"

import useAllCustomers from "@particles/hooks/useAllCustomers"
import useAllTestimonials from "@particles/hooks/useAllTestimonials"

import ComponentParser from "@particles/componentParser"
import SEO from "@particles/seo"

import Cart from "@organisms/cart/cart"
import Customers from "@organisms/customers/customers"
import Footer from "@organisms/footer/footer"
import Header from "@organisms/header/header"
import Testimonials from "@organisms/testimonials/testimonials"

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

const Page = ({ footerMenus, headerMenus, pageContext }) => {
  const customers = useAllCustomers()
  const testimonials = useAllTestimonials()

  if (!pageContext) return null
  const { detailedFooter, seo } = pageContext

  return (
    <>
      <SEO {...seo} />
      <Header menus={headerMenus} />
      <ComponentParser content={pageContext.blocks} />
      {activeEnv === `development` && <Cart />}
      {detailedFooter && <Testimonials {...testimonials} />}
      {detailedFooter && <Customers {...customers} />}
      <Footer menus={footerMenus} />
    </>
  )
}

export default Page
