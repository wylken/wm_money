import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';


export const NewTransactionButton = styled.button`
height: 50px;
border: 0;
background: ${props => props.theme['blue-500']};
border-radius: 5px;
color: ${props => props.theme.white};
padding: 0 1.25rem;
cursor: pointer;

&:hover{
    transition: background-color 0.2s;
    background-color: ${props => props.theme["blue-700"]};
}
`;

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0,0,0,0.75);
`

export const Content = styled(Dialog.Content)`
    background: ${props => props.theme["gray-600"]};
    min-width: 32rem;
    padding: 2.5rem 3rem;
    border-radius: 6px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`