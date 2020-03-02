import React from "react"
import styled from "styled-components"

const DebuggerWrapper = styled.pre`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1em;
  hyphens: none;
  line-height: 1.5;
  tab-size: 4;
  text-align: left;
  text-shadow: 0 -0.1em 0.2em ${props => props.theme.black};
  white-space: pre;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;

  padding: 1em;
  margin: 32px 0;
  overflow: auto;
  border: 0.3em solid ${props => props.theme.black};
  border-radius: 0.5em;
  box-shadow: 1px 1px 0.5em black inset;

  ::-webkit-scrollbar {
    background-color: ${props => props.theme.grey300};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.grey600};
    border: 2px solid ${props => props.theme.grey600};
  }

  code {
    background: none;
    color: ${props => props.theme.white};
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    hyphens: none;
    line-height: 1.5;
    tab-size: 4;
    text-align: left;
    text-shadow: 0 -0.1em 0.2em ${props => props.theme.black};
    white-space: pre;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;

    ::-webkit-scrollbar {
      background-color: ${props => props.theme.grey300};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.grey600};
      border: 2px solid ${props => props.theme.grey600};
    }
  }
`

const Debugger = ({ data }) => (
  <DebuggerWrapper>
    <code>{JSON.stringify(data, null, 4)}</code>
  </DebuggerWrapper>
)

export default Debugger
