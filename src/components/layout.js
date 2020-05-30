import React from "react"
import Nav from "../components/nav"

export default function Layout( { children }) {
    return (
        <>
        <Nav />
        <div style={{ margin: `1rem auto`, maxWidth: 650, padding: `1rem`, backgroundColor: `#cacaca`}}>{children}</div>
        </>
    )
}