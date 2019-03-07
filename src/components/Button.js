import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size: 1.4rem;
    background:transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color:${props => props.cart ? 'var(--mainYellow)' : 'var(--lighBlue)'};
    color: ${prop => prop.cart ? 'var(--mainYellow)' : 'var(--lighBlue)'};
    border-radius: 0.5rem;
    padding: 0.2 rem 0.5rem;
    cursor: pointer;
    margin: .2rem .5rem .2rem 0;
    transition: all 0.5s ease-in-out;
 &:hover{
     background:${prop => prop.cart ?'var(--mainYellow)' : 'var(--lighBlue)'};
     color: var(--mainBlue);
 }
 &:focus{
     outline: none;
 }
`