import styled from 'styled-components'
import Background from './assets/background.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    height: 200vh;
`

export const Image = styled.img`
    margin-top: 30px;
`

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;

    width: 414px;
    height: 100%;
    padding: 30px 36px;

    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
`

export const Label = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;

    color: #EEEEEE;

    margin-left: 26px;
`

export const Input = styled.input`
    width: 340px;
    height: 50px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    border: none;
    outline: none;

    padding-left: 25px;
    margin-bottom: 34px;

    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;

&::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 21px;
}
`

export const Button = styled.button`
    width: 342px;
    height: 50px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;

    border: none;
    outline: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;

    cursor: pointer;

&:hover {
    opacity: .8;
}

&:active {
    opacity: .5;
}
`

export const User = styled.li`
    width: 340px;
    height: 50px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    margin-top: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border: none;
    outline: none;

p {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
}

button {
    cursor: pointer;
    background: none;
    border: none;
}



`