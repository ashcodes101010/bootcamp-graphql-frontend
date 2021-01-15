import styled from 'styled-components'

export const Body = styled.div`
    text-align: center;
    background-color: #fcf9f2;
    min-height: 100vh;
    min-width: 100vw;
`

export const Title = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 80px;
    background-color: #dbc79e;
    color: #3b301b; 
    padding: 15px;
    border: inset 2px;
    border-right: none;
    border-left: none;
`

export const StyledButton = styled.button`
    background-color: #e6dac1;
    color: #3b301b;
    font-size: 20px;
    width: 200px;
    height: 60px;
    margin-right: 25px;
    padding: 15px;
    border-radius: 15px;
    border: outset #e6dac1;
    transition: 
        width 0.2s, 
        height 0.2s, 
        background-color 0.2s, 
        border 0.2s,
        color 0.2s;

    &:hover {
        width: 220px;
        height: 66px;
        background-color: #f5eedf;
        border: outset #f5eedf;
        color: #8f8571;
    }
`