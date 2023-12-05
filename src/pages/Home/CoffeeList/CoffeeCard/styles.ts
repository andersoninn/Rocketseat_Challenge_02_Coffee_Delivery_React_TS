import styled from 'styled-components';

export const CardStyle = styled.div`
    background: ${({theme})=> theme.baseCard};
    width: 256px;
    height: 310px;
    border-radius: 6px 36px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
img {
    margin-top: -20px;
    margin-bottom: 12px;
}
h2{
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
}
p{
    font-size: 0.875rem;
    color: ${({theme}) => theme.baseLabel};
    margin: 8px 20px 20px;
    text-align: center;
}
`
export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
`
export const Shopping = styled.div`
    display: flex;
    margin: 24px 36px;
    width: 208px;
    justify-content: space-between;
div{
    display: flex;
    align-items: center; 
}
span:first-child{
    margin-right: 2px;
    font-size:0.895rem ;
    font-family: 'Roboto', sans-serif;
}
span{
    color: ${({theme})=> theme.baseText};
    font-size:1.5rem ;
    font-family: 'Baloo 2', sans-serif;
}
`
export const TypeOfCoffee = styled.div`
    display: flex;
    
h3 {
    background: ${({theme})=> theme.yellowLight};
    color: ${({theme})=> theme.yellowDark};
    border-radius:100px;
    height: 21px;
    width: 81px;
    font-size: 0.625rem;
    font-weight:bold;
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}`

export const ShoppingButton = styled.div`
div:first-child{
    background: ${({theme})=> theme.baseButton};
    border-radius: 6px;
    padding: 8px 4px;
    width: 72px;
    height: 38px;
    margin-right: 8px ;
}
button{
    background: ${({theme})=> theme.baseButton};
    color: ${({theme})=> theme.purple};
    
    font-size: 1.2rem;
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
export const ButtonCart = styled.button`
span{
    background: ${({theme})=> theme.purpleDark};
    color: ${({theme})=> theme.baseCard};
    
    border-radius: 6px;
    min-width: 38px;
    min-height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;
}
span:hover{
    background: ${({theme})=> theme.purple};
}
`



