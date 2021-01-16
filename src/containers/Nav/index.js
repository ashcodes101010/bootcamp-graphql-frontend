import React from 'react'
import { Navigation, NavLink } from "./styles"

const Nav = () => {
  if (!localStorage.getItem('token')) {
    return (
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="register">Register</NavLink>
      </Navigation>
    )
  }
  return (
    <Navigation>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AddAuthor">Add Author</NavLink>
      <NavLink to="/login" onClick={() => {
        localStorage.removeItem('token')
        window.location.reload()}}
      >
        Logout
      </NavLink>
    </Navigation>
  )
}
export default Nav