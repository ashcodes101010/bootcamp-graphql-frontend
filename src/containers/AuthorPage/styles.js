import styled from 'styled-components'

export const PersonalInfo = styled.div`
    width: 600px;
    font-size: 25px;
    margin: auto;
    color: #3b301b; 
    text-align: left;
    padding: 30px;
    background-color: #f2f1c2;
    border: outset #f2f1c2 5px;
    word-wrap: break-word;
    margin-top: 110px;

    @media (max-width: 800px) {
        margin-top: 30px;

        @media (max-width: 600px) {
        width: 80vw;
        }
    }
`

export const PageArrangement = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const BookSection = styled.div`
    margin: auto;
    margin-top: 30px;
    color: #3b301b; 
`

export const BookForm = styled.div`
    margin-top: 40px;
    text-align: left;
    color: #3b301b; 
    font-size: 20px;
    padding-top: 5px;
    padding-bottom: 20px;
    padding-left: 40px;
    background-color: #f5f4dc;
    margin-bottom: 40px;
`