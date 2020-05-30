import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

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
  