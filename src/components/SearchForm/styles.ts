import styled from "styled-components";

export const SerchFormContainer = styled.form`

    display: flex;
    gap: 1rem;

    input{
        display: flex;
        flex: 1;
        background-color: ${props => props.theme["gray-900"]};
        border: 0;
        color: ${props=>props.theme["gray-500"]};
        border-radius: 6px;
        padding: 1rem;
    }

    button{
        display: flex;
        align-items: center;
        border: 1px solid ${props => props.theme["blue-500"]};
        gap: 0.75rem;
        border-radius: 6px;
        padding: 1rem;
        color: ${props => props.theme["blue-500"]};
        background-color: transparent;

        &:hover{
            background-color: ${props => props.theme["blue-700"]};
            border: 1px solid ${props => props.theme["blue-700"]};
            color: ${props =>props.theme.white};
            transition: background-color 0.2s, color 0.2s, border 0.2s ;
        }
    }


`;