import styled from "styled-components";

export const HeaderFixed = styled.div`
    background: ${({theme}) => theme.background} ;
    position: fixed;
    top: 0;
    width: 1440px;
`
export const HeaderContainer = styled.header `
    display: flex !important;
    justify-content: space-between;
    height: 104px;

    align-items: center;
    padding: 32px 160px;
    margin: auto;

img, a{
    cursor: pointer;
}
 
nav{
    display: flex;
    align-items: center;
}

nav div{
    background: ${({theme}) => theme.purpleLight};
    color: ${({theme})=> theme.purpleDark};

    display: flex;
    margin: 12px;
    padding: 8px;
    border-radius: 6px;
    font-size: 1rem;     
}
nav div span:first-child {
    color: ${({theme})=> theme.purple};
}

nav a{
    background: ${({theme}) => theme.yellowLight};
    color: ${({theme})=> theme.yellowDark};

    padding: 8px;
    border-radius: 6px;
    height: 38px;  
}
span{
display: flex;
align-items: center;
justify-content: center;
}
`
export const OrderNumbers = styled.span`
background: ${({theme}) => theme.yellowDark};
color: ${({theme})=> theme.white};
width: 20px;
height: 20px;
border-radius: 25px;

margin-left: -5%;
margin-top: -15%;

font-size: 0.875rem;
font-weight: bold;
`
