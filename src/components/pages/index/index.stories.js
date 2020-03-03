import React from "react"
import { array } from "@storybook/addon-knobs"

import Header from "organisms/header/header"
import Hero from "organisms/hero/hero"
import Footer from "organisms/footer/footer"

import headerData from "knobs/header.knobs.json"
const { headerNav } = headerData
import footerData from "knobs/footer.knobs.json"
const { footerNav } = footerData

const Index = () => (
  <>
    <Header
      menus={array(headerNav.label, headerNav.default, headerNav.group)}
    />
    <Hero>
      <h2>Title</h2>
      <p>
        I think there's an artist hidden in the bottom of every single one of
        us. A tree cannot be straight if it has a crooked trunk.
      </p>
      <p>
        With something so strong, a little bit can go a long way. I was blessed
        with a very steady hand; and it comes in very handy when you're doing
        these little delicate things.
      </p>
    </Hero>
    <Footer
      menus={array(footerNav.label, footerNav.default, footerNav.group)}
    />
  </>
)

export default {
  component: Index,
  title: `Pages/Index`,
}
