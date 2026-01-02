import { useEffect, useState } from 'react'
import { ListTransactionType } from '@/domain/useCases/ListTransactionType'
import { TransactionTypeSupabaseRepository } from '@/infrastructure/supabase/TransactionTypeSupabaseRepository'
import { Form, Heading, Wrapper } from './styles'
import type { TransactionType } from '@/domain/entities/TransactionType'
import Button from '@/components/Button'
import Card from '@/components/Card'
import TextField from '@/components/TextField'
import FormLabel from '@/components/FormLabel'
import Dropdown from '@/components/Dropdown'

const transactionTypeRepository = new TransactionTypeSupabaseRepository()
const listTransactionTypes = new ListTransactionType(transactionTypeRepository)

const TransactionForm = () => {
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

    const createTransacion = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log({
            transactionType,
            transactionValue,
        })
    }

    return (
        <Card>
            <Wrapper>
                <Form onSubmit={createTransacion}>
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
