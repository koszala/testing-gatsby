import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"

export default function Home() {
  return (
    <>
    <Nav />
    <main style={{ background: `#ccc`, padding: `2rem` }}>
    <p><img src='http://unsplash.it/1000/300?random&gravity=north' alt=''/></p>
    <Header headerText="Hello Gatsby" />
    <p style={{ color: `hsl(0, 20%, 30%)` }}>Some text</p>
    </main>
    </>
    );
  }
  