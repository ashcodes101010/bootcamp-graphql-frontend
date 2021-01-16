import styled from 'styled-components'

export const InfoBox = styled.div`
    text-align: left;
    background-color: #e6dac1;
    word-wrap: break-word;
    width: 500px;
    margin: auto;
    padding: 30px;
    margin-bottom: 30px;
    border: outset #e6dac1 2px;
    font-size: 25px;
    color: #3b301b;

    @media (max-width: 600px) {
        width: 80vw;
    }
`