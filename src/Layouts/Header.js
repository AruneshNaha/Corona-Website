import React from 'react'
import { NavLink, Navbar, NavbarText } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
    return (
        <Navbar color = "info" light expand="md">
            <NavbarText className = "text-white">
                Countries affected with corona
            </NavbarText>
        </Navbar>
    )
}
