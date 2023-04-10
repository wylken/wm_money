import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/logoImg.svg";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg}/>
                <NewTransactionButton>
                    Nova transação
                </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}