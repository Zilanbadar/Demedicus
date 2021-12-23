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

// export const Nav = styled.div `
//     width : 80%;
//     Height : 8vh;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `

export const NavUl = styled.ul `
    width: 20%;
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

export const NavH = styled.h1 `
    width: 60%;     
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 30px;

`

export const NavLiLink = styled(LinkR) `
    text-decoration: none;
    color: inherit;
`

export const NavUlB = styled.ul `
    width: 20%;
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


export const HFilterSec = styled.div `
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`


// Job Section //

export const JobsSection = styled.div `
    width: 100%;
    height: 20vh;
    border-top: 1px solid #eaebed;
    border-bottom: 1px solid #eaebed;
`


export const JFilter = styled.div `
    width : 100%;
    height : 20vh;
    display : flex;
    justify-content : space-around;
    align-items: flex-start;
    padding : 15px 0;
`

export const JFOpt = styled.div `
    width : 40%;
    font-weight: 400;
    display : flex;
`

export const Dropdown = styled.h3 `

`

export const JFSearch = styled.div `
    width : 35%;
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

export const JTDate = styled.h1 `
    width : 30%;
    font-weight: 400;
`

export const JobSec = styled.div `
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    flex-direction: column;
    padding-top: 1%;
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: stretch;

    ::-webkit-scrollbar {
        width: 20px;
    }
      
    ::-webkit-scrollbar-track {
        background: #f0f9f7; 
    }
       
    ::-webkit-scrollbar-thumb {
        background: #38b593; 
    }
      
    ::-webkit-scrollbar-thumb:hover {
        background: #5535; 
    }
`

export const JobDetailed = styled.div `
    width: 88%;
    // min-height: 30vh;
    height : 34vh;
    background-color: #f0f9f7;
    box-shadow: -1px 2px 8px 4px #cfd0d3;
    display : flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    margin-bottom : 1.5%;
`

export const JTJobs = styled.div `
    width: 95%;
    height: 30%;
`

export const JDSec = styled.div `
    width: 95%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const JDMore = styled.div `
    width: 85%;
    height: 100%;
    overflow-y: scroll;
    overflow-x : hidden;

    ::-webkit-scrollbar {
        width: 5px;
    }
      
    ::-webkit-scrollbar-track {
        background: #f0f9f7; 
    }
       
    ::-webkit-scrollbar-thumb {
        background: #38b593; 
    }
      
    ::-webkit-scrollbar-thumb:hover {
        background: #5535; 
    }
`

export const JDDateS = styled.div `
    width: 15%;     
    height: 100%;
`

export const JDHT = styled.h3 `
    color: #38b593;
`

export const JDHs = styled.h4 `
    color : #6a7a76;
    margin : 0;
    padding : 0;
`

export const JDHps = styled.span `
    color: #38b593;
`