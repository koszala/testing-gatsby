import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
    <Header headerText="Testing Gatsby" />
    <main style={{ background: `#ccc` }}>
    <p><img src='http://unsplash.it/900/200?gravity=center' style={{ maxWidth: `100%` }} alt=''/></p>
    <p style={{ color: `hsl(0, 20%, 30%)` }}>Some text</p>
    </main>
    </Layout>
    );
  }
  