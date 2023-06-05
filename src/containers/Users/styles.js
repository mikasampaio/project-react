import styled from 'styled-components'
import Background from '../../assets/bg image.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    height: 100%;
    min-height: 100vh;
`

export const Image = styled.img`
    margin-top: 30px;
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