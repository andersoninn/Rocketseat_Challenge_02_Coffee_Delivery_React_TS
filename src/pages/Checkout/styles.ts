import styled from "styled-components";

export const CheckoutPage = styled.div`
    display: flex;
    padding: 40px 160px 240px 160px;
    font-weight: 130%;
h1{
    color: ${({theme}) => theme.baseSubtitle};
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 15px;
}
`
export const DeliveyAndPayment = styled.div`
    width: 640px;
    margin-right: 32px;
`
// ADRESS AREA ----------------------
export const Address = styled.div`
    background-color: ${({theme})=>theme.baseCard};
    height: 372px;  
    margin-bottom: 12px;
    padding: 40px;
    border-radius: 6px;
`
export const AddressText = styled.div`
    display: flex;
    margin-bottom: 32px;
    
span{
    color: ${({theme}) => theme.yellowDark};
    margin-right: 8px;
}
p:first-child{
    color: ${({theme}) => theme.baseSubtitle};
    font-size: 1rem;
}
p{
    color: ${({theme}) => theme.baseText};
    font-size: 0.875rem;
}`
export const FormAddress = styled.form`
flex-wrap: wrap ;
input{
    background:  ${({theme})=> theme.baseInput};
    margin-bottom: 16px;
    padding: 12px;
    border: none;
    border-radius: 4px;
    height: 42px;
    
}
input[type=number]{
    width: 200px;
    margin-right: 12px;
}
input[type=text] {
    width: 560px;
}
input[type=text] ~ input[type=text] {
    width: 348px;
}
input[type=text] ~ input[type=text]  ~ input[type=text] {
    width: 200px;
    margin-right: 12px;
}
input[type=text] ~ input[type=text] ~ input[type=text] ~ input[type=text]{
    width: 272px;
    margin-right: 12px;
}
input[type=text] ~ input[type=text] ~ input[type=text] ~ input[type=text] ~ input[type=text]{
    width: 64px;
    margin-right: 0px;
}
`

// AREA OF PAYMENT-------------------
export const Payment = styled.div`
    background: ${({theme}) => theme.baseCard};
    padding: 40px;
    border-radius: 6px;      
`
export const TextPayment = styled.div`
    display: flex;
    margin-bottom: 32px;  
span{
    color: ${({theme}) => theme.purple}
}
p:first-child{
    color: ${({theme}) => theme.baseSubtitle};
    font-size: 1rem;
}
p{
    color: ${({theme}) => theme.baseText};
    font-size: 0.875rem;
}
`
export const ButtonList = styled.form`
label{
    display: flex;
    gap: 12px;
}
       
button{
    background: ${({theme})=> theme.baseButton};
    color: ${({theme})=> theme.baseText};
    width: 178.67px;
    height: 51px;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    justify-content: center;
}
button:hover{
    background: ${({theme})=> theme.baseHover};
}

span{
    color: ${({theme})=> theme.purple};
    margin-right: 12px;
}

input[type='radio'] {
    display: none;
}

[data-payment='credit']{
    background: ${({theme})=> theme.purpleLight};
    border: 1px solid ${({theme})=> theme.purple} !important;
}
[data-payment='debit']{
    background: ${({theme})=> theme.purpleLight};
    border: 1px solid ${({theme})=> theme.purple} !important;
}
[data-payment='cash']{
    background: ${({theme})=> theme.purpleLight};
    border: 1px solid ${({theme})=> theme.purple} !important;
}
`

//AREA OF SUMARY --------------------

export const OrderSummary = styled.div`
img{
    width: 64px;
    height: 64px;
    margin-right: 20px;
}
`
export const CheckoutCart = styled.div`
    background: ${({theme}) => theme.baseCard};
    padding: 16px 40px 40px 40px;
    width: 448px;
    height: 498px;
    border-radius: 6px 44px;
    
`
export const CardCoffeeInCart = styled.div` 
display: flex;
padding: 9.5px 4px;
height: 80px;
width: 368px;

border-bottom: 1px solid ${({theme})=> theme.baseButton};
padding-bottom: 88px;
margin-top: 24px;

img{
    margin-right: 20px;
}
h3{
    color: ${({theme})=>theme.baseSubtitle};
    font-size:1rem;
    margin-right: 50px;
}
p{
    color: ${({theme}) => theme.baseText};
    font-size: 1rem;
    font-weight: bold;
}
button{
    margin: 8px;
}


`
export const ButtonsCheckoutCart = styled.div`
display: flex;
font-size: 0.875rem;
`
export const ShoppingButton = styled.div`

div:first-child{
    background: ${({theme})=> theme.baseButton};
    border-radius: 6px;
    padding: 8px 4px;
    height: 32px;
    margin-top: 8px ;
    margin-right: 8px ;
    display: flex;
    align-items: center;
    align-content: center;
}
button:first-child{
    font-size: 1.5rem;
    font-weight: 400;
}
button{
    background: ${({theme})=> theme.baseButton};
    color: ${({theme})=> theme.purple};
    
    font-size: 1rem;
    font-weight: 500;
    height: 14px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}
button:hover{
    color: ${({theme})=> theme.purpleDark};
}
span{
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) =>theme.baseTitle};
    font-size: 1rem;
}
`
export const ButtonRemove = styled.div`
cursor: pointer;

width: 91px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;

div:hover{
    background-color: green;
}
button{
    width: 91px;
    height: 32px;
    padding: 0px 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
}
button:hover{
    background: ${({theme})=> theme.baseHover}; 
        span {
            color: ${({theme})=> theme.purpleDark};
    }
}
span{
    color: ${({theme})=> theme.purple};
    margin: 4px 0px 4px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
p{
    font-size: 0.875rem;
    font-weight: 100;
}
`

// SUMARY TOTAL VALUE --------------
export const SumaryTotalValue = styled.div`
    width: 368px;
    margin: 24px 0px;
div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}
p{
    color: ${({theme}) => theme.baseText};
    font-size: 0.875rem;
}
span{
    color: ${({theme}) => theme.baseText};
    font-size: 1rem;
}
h2{
    color: ${({theme}) => theme.baseSubtitle};
    font-size: 1.25rem;
}

`

export const ConfirmOrderButton = styled.button`
cursor: pointer;

background: ${({theme})=> theme.yellow};
width: 368px;
height: 46px;
border: none;
border-radius: 6px;

font-size: 0.875rem;
font-weight: bold;
color: ${({theme}) => theme.white};

&:hover{
    background: ${({theme})=> theme.yellowDark};
}
&:disabled {
    cursor: no-drop;
}

`

