import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Home() {
  return (
    <Layout>
    <Header headerText="Testing Gatsby" />
    <main style={{ background: `#ccc`, padding: `1rem 2rem` }}>
    <p>Some text</p>
    </main>
    </Layout>
    );
  }
  