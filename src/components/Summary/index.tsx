import { ArrowCircleDown, ArrowCircleUp, CaretCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary(){
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#709aed"/>
                </header>
                <div>
                    R$ 1.500,00
                </div>
            </SummaryCard>
            <SummaryCard>
            <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#AB222E"/>
                </header>
                <div>
                    R$ 800,00
                </div>
            </SummaryCard>
            <SummaryCard variant="blue">
            <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#FFF"/>
                </header>
                <div>
                    R$ 700,00
                </div>
            </SummaryCard>
        </SummaryContainer>
    )
}