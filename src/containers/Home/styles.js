import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    height: 100vh;
`

export const Image = styled.img`
    margin-top: 30px;
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



