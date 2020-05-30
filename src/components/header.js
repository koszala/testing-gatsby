import React from "react"
import HeaderStyles from "./header.module.css"

export default function Header(props) {
    
    return <h1 className={HeaderStyles.h1}>{ props.headerText }</h1>
}