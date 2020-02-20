import styled from "styled-components"
import device from "@particles/mediaQueries"

const StyledDashboard = styled.main`
  background-color: ${props => props.theme.grey200};
  color: ${props => props.theme.black};
  min-height: 100vh;
  overflow: initial;
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }

  label {
    color: ${props => props.theme.black};
  }

  .table {
    background-color: ${props => props.theme.offWhite};
    color: ${props => props.theme.black};

    img {
      max-width: 64px;
    }

    th {
      background-color: ${props => props.theme.grey300};
    }

    tr {
      border-top: 1px solid ${props => props.theme.grey300};
    }
  }

  .card {
    border-radius: 5px;
    padding: ${props => props.theme.spacingLarge};

    background-color: ${props => props.theme.white};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    + .card {
      margin-top: ${props => props.theme.spacingLarge};
    }
  }

  .card--small {
    max-width: 680px;
  }

  .dashboard__content {
    @media ${device.lg} {
      align-items: flex-start;
      display: flex;
      margin-right: 64px;
      padding: 0;
    }
  }

  .loader {
    color: ${props => props.theme.black};
  }

  main {
    padding: 0 30px;
    width: 100%;

    @media ${device.lg} {
      padding: 0;
    }
  }
`

export default StyledDashboard
