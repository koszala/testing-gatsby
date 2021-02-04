import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import Header from "../components/header"

export default function CssModules() {
  return (
    <Layout>
      <Container>
        <Header headerText="CSS Modules test" />
        <p>Css Modules works as expected.</p>
      </Container>
    </Layout>
  )
}