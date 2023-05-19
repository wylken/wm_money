import { HeaderContainer, HeaderContent } from "./styles";


import logoImg from "../../assets/logoImg.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg}/>
                <NewTransactionModal />
            </HeaderContent>
        </HeaderContainer>
    )
}