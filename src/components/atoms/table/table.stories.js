import React from "react"
import { array } from "@storybook/addon-knobs"

import knobData from "./table.knobs.json"
const { tableItems } = knobData

export const tableCaption = () => (
  <table class="table">
    <caption>Color names and values</caption>
    <tbody>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">HEX</th>
        <th scope="col">HSLa</th>
        <th scope="col">RGBa</th>
      </tr>
      <tr>
        <th scope="row">Teal</th>
        <td>
          <code>#51F6F6</code>
        </td>
        <td>
          <code>hsla(180, 90%, 64%, 1)</code>
        </td>
        <td>
          <code>rgba(81, 246, 246, 1)</code>
        </td>
      </tr>
      <tr>
        <th scope="row">Goldenrod</th>
        <td>
          <code>#F6BC57</code>
        </td>
        <td>
          <code>hsla(38, 90%, 65%, 1)</code>
        </td>
        <td>
          <code>rgba(246, 188, 87, 1)</code>
        </td>
      </tr>
    </tbody>
  </table>
)

export const tableColGroup = () => (
  <table class="table">
    <colgroup span="4"></colgroup>
    <tr>
      <th>Countries</th>
      <th>Capitals</th>
      <th>Population</th>
      <th>Language</th>
    </tr>
    <tr>
      <td>USA</td>
      <td>Washington, D.C.</td>
      <td>309 million</td>
      <td>English</td>
    </tr>
    <tr>
      <td>Sweden</td>
      <td>Stockholm</td>
      <td>9 million</td>
      <td>Swedish</td>
    </tr>
  </table>
)

export const theadTfootTBody = () => (
  <table class="table">
    <thead>
      <tr>
        <th>Header content 1</th>
        <th>Header content 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Body content 1</td>
        <td>Body content 2</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer content 1</td>
        <td>Footer content 2</td>
      </tr>
    </tfoot>
  </table>
)

export default {
  title: `Atoms/Table`,
}
