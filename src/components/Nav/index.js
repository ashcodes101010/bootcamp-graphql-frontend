import React from 'react'
import { Navigation, NavLink } from "./styles"

const Nav = () =>
    <Navigation>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/AddAuthor">Add Author</NavLink>
    </Navigation>

export default Nav