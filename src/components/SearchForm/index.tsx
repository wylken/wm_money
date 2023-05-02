import { MagnifyingGlass } from "phosphor-react";
import { SerchFormContainer } from "./styles";

export function SearchForm(){
    return(
        <SerchFormContainer>
            <input placeholder="Busque por transações"/>
            <button>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SerchFormContainer>
    )
}