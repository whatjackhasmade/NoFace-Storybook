import React from "react"
import { addDecorator, addParameters, configure } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks"
import { withKnobs } from "@storybook/addon-knobs"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import RootWrapper from "../src/components/particles/rootWrapper"

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

const GlobalDecorator = storyFn => <RootWrapper>{storyFn()}</RootWrapper>

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
