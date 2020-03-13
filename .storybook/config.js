import "intersection-observer"
import React from "react"
import fetch from "isomorphic-unfetch"
import { addDecorator, addParameters, configure } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks"
import { withKnobs } from "@storybook/addon-knobs"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import { SWRConfig } from "swr"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../src/components/particles/globalStyle"
import ThemeDefault from "../src/components/particles/themeDefault"

import ApolloWrapper from "../src/components/particles/apollo/wrapper"
import ApplicationState from "../src/components/particles/context/applicationState"

const fetcher = async url => {
  const response = await fetch(url)
  if (response.status !== 200) return response
  const jsonResponse = await response.json()
  return jsonResponse
}

// Option defaults:
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    downPanelInRight: true,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "right",
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
  },
})

// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module)

const GlobalDecorator = storyFn => (
  <SWRConfig
    value={{
      fetcher: (...args) => fetcher(...args),
    }}
  >
    <ApolloWrapper>
      <ApplicationState>
        <ThemeProvider theme={ThemeDefault}>
          <>
            <GlobalStyle />
            <main className="wrapper">{storyFn()}</main>
          </>
        </ThemeProvider>
      </ApplicationState>
    </ApolloWrapper>
  </SWRConfig>
)

addDecorator(GlobalDecorator)
addDecorator(withKnobs)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  },
})
