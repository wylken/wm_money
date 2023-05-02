import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionTable, TransactionTableContainer } from "./styles";


export function Home(){
    return (
        <div>
            <Header />
            <Summary />
            
            <TransactionTableContainer>
            <SearchForm />
                <TransactionTable>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td><PriceHighlight type="deposit">R$ 12.900,00</PriceHighlight> </td>
                        <td>Venda</td>
                        <td>14/04/2023</td>
                    </tr>
                    <tr>
                        <td>Feira no Assai</td>
                        <td><PriceHighlight type="draw">R$ 800,00</PriceHighlight> </td>
                        <td>Gasto</td>
                        <td>14/04/2023</td>
                    </tr>
                </TransactionTable>
            </TransactionTableContainer>
        </div>
    )
}