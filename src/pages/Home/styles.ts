import styled from "styled-components";


export const HomeContainer = styled.div``;

export const TransactionTableContainer = styled.menu`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto;

`;

interface TransactionLabelType{
    type: "draw" | "deposit";
}

export const PriceHighlight = styled.span<TransactionLabelType>`
    
    //faz um if para retornar o valor da propriedade de color
    color: ${props => props.type == "deposit"?  props.theme["green-500"]:props.theme["red-500"]}
`

export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate; // habilita dar espaço entre as linhas da tabela
    border-spacing: 0 0.5rem; // setando o espaço entre a linhas, 0px para os lados e 0,5rem para cima e baixo
    margin-top: 1rem;
    td{
        background-color: ${props=>props.theme["gray-600"]};
        padding: 1.25rem 2rem;

        &:first-child{
            border-bottom-left-radius: 6px;
            border-top-left-radius: 6px;
        }
        &:last-child{
            border-bottom-right-radius: 6px;
            border-top-right-radius: 6px;
        }
    }
`;