import * as Dialog from '@radix-ui/react-dialog';
import { Content, NewTransactionButton, Overlay } from './styles';


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
                    <Dialog.Title>Nova Transação</Dialog.Title>
                    <Dialog.Close />
                    Testando Dialog
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}