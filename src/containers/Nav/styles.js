import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navigation = styled.nav`
    background-color: #dbc79e;
    overflow: hidden;
`

export const NavLink = styled(Link)`
    float: left;
    color: #3b301b;
    text-align: center;
    padding: 20px 16px;
    text-decoration: none;
    font-size: 30px;
    transition: background-color 0.15s;

    &:hover {
        background-color: #f7e6c3;
    }

    &:active {
        background-color: #d1c6b2;
        color: white;
    }
`