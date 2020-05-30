import React from "react"
import Nav from "../components/nav"
import LayoutStyles from "./layout.module.scss"

export default function Layout( { children }) {
    return (
        <>
        <Nav />
        <div className={ LayoutStyles.content }>{children}</div>
        </>
    )
}