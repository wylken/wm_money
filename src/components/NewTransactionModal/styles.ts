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
    background: ${props => props.theme["gray-800"]};
    min-width: 32rem;
    padding: 2.5rem 3rem;
    border-radius: 6px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form{
        display: flex;
        flex-direction: column;
        margin: 2rem 0rem;
        gap: 1rem;

        input{
            padding: 0.75rem;
            border-radius: 6px;
            border: none;
            background-color: ${props =>props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};
        }
        button[type="submit"]{
            margin-top: 1rem;
            padding: 1rem;
            border: 0;
            border-radius: 6px;
            background-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};

            &:hover{
                transition: background-color 0.2s;
                background-color: ${props => props.theme["green-700"]};

            }
        }
        
    }

`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border:0;
    top: 1.5rem;
    right: 1.5rem;
    color: ${props => props.theme.white};
    line-height: 0;
    cursor: pointer;

`;