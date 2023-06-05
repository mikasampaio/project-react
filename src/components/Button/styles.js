import styled from 'styled-components'

export const Button = styled.button`
    margin-top: ${props => props.isBack && '25px' };
    width: 342px;
    height: 50px;
    background: ${ props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;

    border: ${ props => props.isBack ? '1px solid #FFFFFF' : 'none'};
    outline: none;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${ props => props.isBack && 'row-reverse'};
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

img {
    transform: ${ props => props.isBack && 'rotateY(180deg)'};
}



`