import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #3b301b;
    transition: color 0.15s, font-size 0.15s;

    &:hover {
        color: #5c4c2f;
        font-size: 45px;
    }
`
export const StyledAuthor = styled.div`
    width: 550px;
    margin: auto;
    padding: 35px;
    font-size: 40px;
    background-color: #f2f1c2;
    margin-bottom: 10px;
    margin-top: 20px;
    word-wrap: break-word;

    @media (max-width: 650px) {
        width: 80vw;
    }
`
