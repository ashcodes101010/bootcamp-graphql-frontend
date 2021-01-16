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

    input {
        height: 15px;
        width: 150px;
        font-size: 15px;
        border-radius: 7px;
        padding: 7px;
    }

    button {
        background-color: #e6dac1;
        color: #3b301b;
        font-size: 12px;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        border: outset #e6dac1;
        transition: 
            width 0.17s, 
            height 0.17s, 
            background-color 0.17s, 
            border 0.17s,
            color 0.17s;

        &:hover {
            width: 85px;
            height: 31.9px;
            background-color: #f5eedf;
            border: outset #f5eedf;
            color: #8f8571;
        }
    }
`