import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

export default function Nav() {
    return (
        <ul className={navStyles.nav}>
        <li>
        <Link to="/" className={navStyles.link} activeClassName={navStyles.linkActive}>Home</Link>
        </li>
        <li>
        <Link to="/news" className={navStyles.link} activeClassName={navStyles.linkActive} partiallyActive={true}>News</Link>
        </li>
        <li>
        <Link to="/blog" className={navStyles.link} activeClassName={navStyles.linkActive} partiallyActive={true}>Blog</Link>
        </li>
        <li>
        <Link to="/about" className={navStyles.link} activeClassName={navStyles.linkActive}>About</Link>
        </li>
        <li>
        <Link to="/css-modules" className={navStyles.link} activeClassName={navStyles.linkActive}>Css modules</Link>
        </li>
        <li>
        <Link to="/contact" className={navStyles.link} activeClassName={navStyles.linkActive}>Contact</Link>
        </li>
        </ul>
        )
    }