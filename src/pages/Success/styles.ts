import styled from "styled-components";

export const SuccessArea = styled.div`
    padding: 94px 160px;
    font-weight: 130%;
h1{
    color: ${({theme})=> theme.yellowDark};
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
}
p{
    font-size: 1.25rem;
    color: ${({theme})=> theme.baseSubtitle};
}
`
export const PurchaseAndImage = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

img{
    width: 492px;
    height: 293px; 
}

`
export const BorderPurchaseInformation = styled.div`
    box-sizing: border-box;
    background: linear-gradient(125deg, ${({theme})=> theme.yellow}, ${({theme})=> theme.purple}) ;
    border-radius: 6px 66px;
    padding: 2px;
    min-width: 526px;
    min-height: 240px;
    margin-top: 40px;
`
export const PurchaseInformation = styled.div`
    padding: 40px;
    background-color: ${({theme})=> theme.white};
    border-radius: 6px 66px; 
div{
    display: flex;
}
div span{
    color: ${({theme})=> theme.white};
    border-radius: 100% ;
    margin-right: 12px;
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    font-size: 1rem;
    color: ${({theme})=> theme.baseText};
}
`
export const PurchaseInformationDescription = styled.div`
display: block !important;
`
// SPANS -----------------------------
export const SpanMapPin = styled.span`
background: ${({theme})=> theme.purple};
margin-bottom: 32px;
`
export const SpanTime = styled.span`
background: ${({theme})=> theme.yellow};
margin-bottom: 32px;
`
export const SpanCurrencyDollar = styled.span`
background: ${({theme})=> theme.yellowDark};
`