import React from "react"
import { text } from "@storybook/addon-knobs"
import Heading from "./heading"

import knobData from "./heading.knobs.json"
const { headingText } = knobData

export const allHeadings = () => (
  <>
    <Heading level={1}>
      {text(headingText.label, headingText.default, headingText.group)}
    </Heading>
    <Heading level={2}>
      {text(headingText.label, headingText.default, headingText.group)}
    </Heading>
    <Heading level={3}>
      {text(headingText.label, headingText.default, headingText.group)}
    </Heading>
    <Heading level={4}>
      {text(headingText.label, headingText.default, headingText.group)}
    </Heading>
    <Heading level={5}>
      {text(headingText.label, headingText.default, headingText.group)}
    </Heading>
    <Heading level={6}>
      {text(headingText.label, headingText.default, headingText.group)}
    </Heading>
  </>
)

export const levelOne = () => (
  <Heading level={1}>
    {text(headingText.label, headingText.default, headingText.group)}
  </Heading>
)

export const levelTwo = () => (
  <Heading level={2}>
    {text(headingText.label, headingText.default, headingText.group)}
  </Heading>
)

export const levelThree = () => (
  <Heading level={3}>
    {text(headingText.label, headingText.default, headingText.group)}
  </Heading>
)

export const levelFour = () => (
  <Heading level={4}>
    {text(headingText.label, headingText.default, headingText.group)}
  </Heading>
)

export const levelFive = () => (
  <Heading level={5}>
    {text(headingText.label, headingText.default, headingText.group)}
  </Heading>
)

export const levelSix = () => (
  <Heading level={6}>
    {text(headingText.label, headingText.default, headingText.group)}
  </Heading>
)

export default {
  component: Heading,
  title: `Atoms/Heading`,
}
