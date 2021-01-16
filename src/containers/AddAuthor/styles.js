import styled from 'styled-components'

export const FormGroup = styled.div`
    margin: auto;
    font-size: 25px;
    color: #3b301b;
    background-color: #f5f4dc;
    border: outset #f5f4dc 5px;
    width: 400px;
    padding-bottom: 40px;
    padding-top: 20px;

    input {
        height: 15px;
        width: 150px;
        font-size: 15px;
        border-radius: 7px;
        padding: 7px;
    }
    @media (max-width: 450px) {
        width: 80vw;
    }
`