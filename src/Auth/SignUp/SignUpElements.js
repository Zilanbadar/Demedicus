import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Main = styled.div `
    width : 100%;
    height : 100vh;
    background-color : #ffffff;
    display : flex;

    @media (max-width: 768px) {
        height : 80vh;
    }
    @media (max-width: 425px) {
        height : 50vh;

    }
`

export const MLeft = styled.div `
    width : 45%;
    height : 100%;
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    background-color : #38b593;
`

export const LeftHp = styled.div `
    display: flex;
    color: #fff;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20%;
    width: 78%;
`
export const LeftH =  styled.h1`
    margin: 0;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 4%;

    @media (max-width: 1024px) {
        font-size: 40px;

    }
    @media (max-width: 768px) {
        font-size: 30px;

    }
    @media (max-width: 425px) {
        font-size: 16px;

    }
`

export const LeftP = styled.p `
    font-weight : 300;
    font-size: 32px;
    text-align: center;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 25px;

    }
    @media (max-width: 768px) {
        font-size: 18px;

    }
    @media (max-width: 425px) {
        font-size: 10px;

    }
`

export const LeftBtn = styled.button `
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 6px 11px;  
    background-color: transparent;
    color: #fff;
    transition: all 0.3s ease-out;
    cursor : pointer;

    &:hover {
        background-color : #fff;
        color : #38b593;
        transition : all 0.3s ease-in-out;
        padding: 6px 26px;
        font-weight: 700;
    }


    @media (max-width: 768px) {
        font-size: 10px;
        padding: 4px 8px;

        &:hover {
            padding: 4px 12px;
        }
    }
    @media (max-width: 425px) {
        font-size: 7px;
        padding: 2px 4px;
        border-radius: 2px;

        &:hover {
            padding: 2px 10px;
        }
    }
`

export const LBLink = styled(LinkR) `
    text-decoration: none;
    color: inherit;
`

export const MRight = styled.form `
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const RightHI = styled.div `
    width: auto;
`

export const RightH = styled.h1 `
    color: #38b593;
    font-size: 48px;

    @media (max-width: 1024px) {
        font-size: 42px;
    }

    @media (max-width: 768px) {
        font-size: 32px;
    }

    @media (max-width: 425px) {
        font-size: 20px;
    }
`

export const RightI = styled.div `
    width: 44%;
    display: flex;
    justify-content: space-around;;
    margin: auto;
`
export const RIF = styled.div `
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #adadad;
    border-radius: 16px;
    transition: all 0.3s ease-out;

    &:hover {
        background-color : #38b593;
        color: #fff;
        border : 2px solid #38b593;
        transition : all 0.3s ease-in-out;
        transform : scale(1.2, 1.2);
    }

    @media (max-width: 768px) {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 425px) {
        width: 18px;
        height: 18px;
        border-radius: 10px;
    }
`

export const RII = styled.div `
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #adadad;
    border-radius: 16px;
    transition: all 0.3s ease-out;

    &:hover {
        background-color : #38b593;
        color: #fff;
        border : 2px solid #38b593;
        transition : all 0.3s ease-in-out;
        transform : scale(1.2, 1.2);
    }

    @media (max-width: 768px) {
        width: 22px;
        height: 22px;
    }

    @media (max-width: 425px) {
        width: 18px;
        height: 18px;
        border-radius: 10px;
    }
`

export const RIL = styled.div `
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #adadad;
    border-radius: 16px;
    transition: all 0.3s ease-out;

    &:hover {
        background-color : #38b593;
        color: #fff;
        border : 2px solid #38b593;
        transition : all 0.3s ease-in-out;
        transform : scale(1.2, 1.2);
    }

    @media (max-width: 768px) {
        width: 22px;
        height: 22px;
    }
    
    @media (max-width: 425px) {
        width: 18px;
        height: 18px;
        border-radius: 10px;
    }
`

export const RightP = styled.p `
    color : #adadad;
    margin-top: 35px;

    @media (max-width: 768px) {
        font-size: 12px;
        margin-top: 20px;
    }

    @media (max-width: 425px) {
        font-size: 8px;
        margin-top: 6px;
    }
`

export const RightIn = styled.div  `
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;
    height : 28vh;
    width: 48%;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        height: 22vh;
        margin-bottom: 16px;
    }
`

export const RInN = styled.input `
    width: 100%;
    height: 7vh;
    border: none;
    background-color: #e9f2ef;
    color : #00503a;
    border-radius: 4px;
    padding-left : 5px;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #38b593;
        padding-left: 20px;
        transition : all 0.3s ease-in-out;
        color : #38b593;
    }

    @media (max-width: 768px) {
        height: 6vh;
    }
`

export const RInE = styled.input `
    width: 100%;
    height: 7vh;
    border: none;
    background-color: #e9f2ef;
    color : #00503a;
    border-radius: 4px;
    padding-left : 5px;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #38b593;
        padding-left: 20px;
        transition : all 0.3s ease-in-out;
        color : #38b593;
    }

    @media (max-width: 768px) {
        height: 6vh;
    }
`

export const RInP = styled.input `
    width: 100%;
    height: 7vh;
    border: none;
    background-color: #e9f2ef;
    color : #00503a;
    border-radius: 4px;
    padding-left : 5px;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #38b593;
        padding-left: 20px;
        transition : all 0.3s ease-in-out;
        color : #38b593;
    }

    @media (max-width: 768px) {
        height: 6vh;
    }
`

export const RightBtn = styled.button `
    border-radius: 4px;
    border : none;
    padding: 10px 12px;  
    background-color: #38b593;
    color: #fff;
    transition: all 0.3s ease-out;
    cursor : pointer;

    &:hover {
        background-color : #fff;
        border: 1px solid #38b593;
        color : #38b593;
        transition : all 0.3s ease-in-out;
        padding: 10px 26px;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        font-size: 10px;
        padding: 4px 8px;

        &:hover {
            padding: 4px 12px;
        }
    }
    @media (max-width: 425px) {
        font-size: 7px;
        padding: 2px 4px;
        border-radius: 2px;

        &:hover {
            padding: 2px 10px;
        }
    }

`
