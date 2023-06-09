import styled, { css } from "styled-components";


export const SummaryContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    margin-top: -5rem;

    display: grid; //Para poder dividir a div como se fosse uma tabela
    grid-template-columns: 1fr 1fr 1fr; //Informando que a div vai ter 3 colunas, todas com o mesmo tamanho
`

interface SummaryCardType{
    variant ?: "blue"
}

export const SummaryCard = styled.div<SummaryCardType>`
    padding: 1.5rem;
    background-color: ${props => props.theme["gray-700"]};
    margin: 0 10px;
    border-radius: 6px;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div{
        font-size: 32px;
        font-weight: bold;
        margin-top: 10px;
    }

    //Se a existir a propriedade variant, retorna a propriedade background para o elemento
    ${props => props.variant && css`
        background-color: ${props.theme["blue-700"]};
    `}
`