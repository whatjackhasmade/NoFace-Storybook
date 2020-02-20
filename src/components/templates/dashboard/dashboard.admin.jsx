import React from "react"
import Helmet from "react-helmet"

import StyledDashboard from "./dashboard.styles"

import IsAdmin from "@particles/permission/isAdmin"

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
      <StyledDashboard className="wrapper">
        <section className="dashboard__content">
          <Sidebar
            {...props}
            {...sidebar}
            menu={menu}
            toggleMenu={toggleMenu}
          />
          <main>
            <IsAdmin>{children}</IsAdmin>
          </main>
        </section>
      </StyledDashboard>
    </>
  )
}

export default Dashboard
