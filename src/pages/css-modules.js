import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

export default function CssModules() {
    return (
        <Layout>
        <Container>
        <Header headerText="CSS Modules test" />
        <p>Css Modules are cool</p>
        </Container>
        </Layout>
        )
    }