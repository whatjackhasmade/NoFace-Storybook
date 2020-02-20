import React from "react"
import Helmet from "react-helmet"

import StyledDashboard from "./dashboard.styles"

import DashboardState from "@particles/context/dashboardState"

import IsTeam from "@particles/permission/isTeam"

import Sidebar from "@organisms/sidebar/sidebar"

const Dashboard = props => {
  const { children, menu, sidebar, toggleMenu } = props
  return (
    <>
      <Helmet
        defer={false}
        htmlAttributes={{
          class: `html html--dashboard`,
        }}
      >
        <title>Dashboard - Makeup and Mane</title>
      </Helmet>
      <DashboardState>
        <StyledDashboard className="wrapper">
          <section className="dashboard__content">
            <Sidebar
              {...props}
              {...sidebar}
              menu={menu}
              toggleMenu={toggleMenu}
            />
            <main>
              <IsTeam>{children}</IsTeam>
            </main>
          </section>
        </StyledDashboard>
      </DashboardState>
    </>
  )
}

export default Dashboard
