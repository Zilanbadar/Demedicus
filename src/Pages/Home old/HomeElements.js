import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'




//Navbar Section//


export const Main = styled.div `
    width : 100%;
    height : 100vh;
    background-color : #fff;
`

export const Navbar = styled.nav `
    width : 100%;
    height : 9vh;
    background-color : #38b593;
    display: flex;
    justify-content: end;
    align-items: center;
`

export const Nav = styled.div `
    width : 80%;
    Height : 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavUl = styled.ul `
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
`

export const NavLi = styled.li `
    color : #fff;
    cursor : pointer;
    transition : 0.3s all ease-in-out;
    position : inherit;


    &:hover {
        transition : 0.3s all ease-in-out;
        transform : scale(1.1, 1.1);
        font-weight : 600;
    }
`

export const NavLiLink = styled(LinkR) `
    text-decoration: none;
    color: inherit;
`

export const NavUlB = styled.ul `
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    column-gap : 12px;
    z-index : 10;
`

export const NavLiB = styled.li `
    color : #fff;
    cursor : pointer;
    transition : 0.3s all ease-in-out;


`

export const NavBtn = styled.button `
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 10px 11px;  
    background-color: #38b593;
    color: #fff;
    transition: all 0.3s ease-out;
    cursor : pointer;

    &:hover {
        background-color : #fff;
        color : #38b593;
        transition : all 0.3s ease-in-out;
        padding: 8px 11px;
        font-weight : 700;
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

export const NavSiLink = styled(LinkR) `
    text-decoration: none;
    color: inherit;
`



// Hero Section //


export const HeroSection = styled.div `
    width : 100%;
    height : 75vh;
    display : flex;
    justify-content: flex-end;
    column-gap: 5%;
    align-items : center;
`

export const HeroLeft = styled.div `
    width : 40%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : flex-start;
    flex-direction: column;
`

export const HLeftH = styled.h1 `
    color: #38b593;
    font-size: 44px;
`

export const HLeftP = styled.p `
    color: #38b593;
    font-size: 20px;
`

export const HLeftIn = styled.input `
    width: 100%;
    height: 6vh;
    border: none;
    background-color: #dedede;
    color : #00503a;
    border-radius: 4px;
    padding-left : 20px;
    transition: all 0.3s ease-out;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #38b593;
        padding-left: 20px;
        transition : all 0.3s ease-in-out;
        color : #38b593;
        box-shadow: -3px 3px 7px 0px #00815e;
    }
`

export const HeroRight = styled.div `
    width : 50%;
    height : 100%;
`

export const HRightImg = styled.img `
    width: 100%;
    height: auto;
    margin-top: -56px;
`


// Job Section //

export const JobsSection = styled.div `
    width: 100%;
    height: 14vh;
    border-top: 1px solid #eaebed;
    border-bottom: 1px solid #eaebed;
    margin-top: 80px;
`


export const JTitle = styled.div `
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : space-around;
    align-items : flex-end;
`

export const JTHead = styled.h1 `
    width : 50%;
    font-weight: 400;
`

export const JTDate = styled.h1 `
    width : 30%;
    font-weight: 400;
`

export const JobSec = styled.div `
    width : 100%;
    display : flex;
    justify-content : space-around;
    align-items : flex-end;
    border-bottom: 1px solid #eaebed;
`

export const JTJobs = styled.div `
    width : 50%;
    font-weight: 400;
`

export const JTDates = styled.div `
    width : 30%;
    font-weight: 400;
`