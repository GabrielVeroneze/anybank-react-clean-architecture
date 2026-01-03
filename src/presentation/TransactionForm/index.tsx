import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { ListTransactionType } from '@/domain/useCases/ListTransactionType'
import { CreateTransaction } from '@/domain/useCases/CreateTransaction'
import { TransactionTypeSupabaseRepository } from '@/infrastructure/supabase/TransactionTypeSupabaseRepository'
import { TransactionSupabaseRepository } from '@/infrastructure/supabase/TransactionSupabaseRepository'
import { Form, Heading, Wrapper } from './styles'
import type { TransactionType } from '@/domain/entities/TransactionType'
import type { Transaction } from '@/domain/entities/Transaction'
import type { RootState } from '@/app/store'
import Button from '@/components/Button'
import Card from '@/components/Card'
import TextField from '@/components/TextField'
import FormLabel from '@/components/FormLabel'
import Dropdown from '@/components/Dropdown'

const transactionTypeRepository = new TransactionTypeSupabaseRepository()
const listTransactionTypes = new ListTransactionType(transactionTypeRepository)

const transactionRepository = new TransactionSupabaseRepository()
const createTransaction = new CreateTransaction(transactionRepository)

interface TransactionFormProps {
    onRegister: (newTransaction: Transaction) => void
}

const TransactionForm = ({ onRegister }: TransactionFormProps) => {
    const session = useSelector((state: RootState) => state.auth.session)

    const [transactionType, setTransactionType] = useState('')
    const [transactionValue, setTransactionValue] = useState('')
    const [transactionTypes, setTransactionTypes] = useState<TransactionType[]>(
        [],
    )

    useEffect(() => {
        const fetchTransactionTypes = async () => {
            const data = await listTransactionTypes.execute()

            setTransactionTypes(data)
        }

        fetchTransactionTypes()
    }, [])

    const handleFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()

        if (!session) return

        try {
            const transaction = await createTransaction.execute(
                Number(transactionValue),
                Number(transactionType),
                session.user.id,
            )

            onRegister(transaction)

            setTransactionType('')
            setTransactionValue('')

            toast.success('Transação criada com sucesso!')
        } catch (error) {
            console.log('Falha ao criar transação', error)
            toast.error('Não foi possível criar a transação.')
        }
    }

    return (
        <Card>
            <Wrapper>
                <Form onSubmit={handleFormSubmit}>
                    <Heading>Nova transação</Heading>
                    <fieldset>
                        <FormLabel>Transação</FormLabel>
                        <Dropdown
                            value={transactionType}
                            onChange={(evt) =>
                                setTransactionType(evt.target.value)
                            }
                            required
                        >
                            <option value="" disabled hidden>
                                Selecione o tipo de transação
                            </option>
                            {transactionTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                    {type.display}
                                </option>
                            ))}
                        </Dropdown>
                    </fieldset>
                    <fieldset>
                        <FormLabel>Valor</FormLabel>
                        <TextField
                            placeholder="R$ 00,00"
                            type="number"
                            value={transactionValue}
                            onChange={(evt) =>
                                setTransactionValue(evt.target.value)
                            }
                            required
                        />
                    </fieldset>
                    <Button>Concluir transação</Button>
                </Form>
            </Wrapper>
        </Card>
    )
}

export default TransactionForm
