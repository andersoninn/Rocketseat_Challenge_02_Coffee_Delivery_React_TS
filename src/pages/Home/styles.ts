import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    padding: 94px 160px;
    font-weight: 130%;
    width: 1440px;
    height: 544px;
    
img{
    width: 476px;
    height: 360px;
    margin-left: 56px;
}
`

export const HomeTitle = styled.div`
h1{
    font-size: 3rem;
    margin-bottom: 16px;
    font-family:'Baloo 2', sans-serif ;
}
p{
    font-size: 1.25rem;
    margin-bottom: 46px;
}
`

export const DescriptionHome = styled.div`
    display: flex;
p{
    margin-left:12px ;
    font-size: 1rem;
}

div span{
    background: ${({theme})=> theme.yellow};
    color: ${({theme})=> theme.white};
    border-radius: 100% ;
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
export const FirstBoxDescription = styled.div`
    div{
        width: 294px;
        display:flex;
        align-items: center;
        margin-top: 20px;
    }
    div:first-child span{
    background: ${({theme})=> theme.yellowDark};
    }
`
export const SecondBoxDescription = styled.div`
    div{
        width: 294px;
        display:flex;
        align-items: center;
        margin-top: 20px;
    }
    div:first-child span{
        background: ${({theme})=> theme.baseText}
    }
    div span {
        background: ${({theme})=> theme.purple};
}
`
