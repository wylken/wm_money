import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, NewTransactionButton, Overlay } from './styles';


export function NewTransactionModal(){
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <NewTransactionButton>
                    Nova transação
                </NewTransactionButton>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Overlay />
                <Content>
                    <CloseButton>
                        <X size={24}/>
                    </CloseButton>
                    <Dialog.Title>Nova Transação</Dialog.Title>
                    
                    <form>
                        <input placeholder='Descrição'/>
                        <input placeholder='Preço'/>
                        <input placeholder='Categoria' />
                        <button type='submit'>Cadastrar</button>
                    </form>
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}