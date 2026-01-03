import { useEffect, useState } from 'react'
import { TransactionSupabaseRepository } from '@/infrastructure/supabase/TransactionSupabaseRepository'
import { ListAllTransactions } from '@/domain/useCases/ListAllTransactions'
import { Main } from './styles'
import type { Transaction } from '@/domain/entities/Transaction'
import Sidebar from '@/presentation/Sidebar'
import Account from '@/presentation/Account'
import TransactionForm from '@/presentation/TransactionForm'
import Statement from '@/presentation/Statement'

const transactionRepository = new TransactionSupabaseRepository()
const listTransactions = new ListAllTransactions(transactionRepository)

const Home = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await listTransactions.execute()

            setTransactions(data)
        }

        fetchTransactions()
    }, [])

    const onRegisterTransacion = (newTransaction: Transaction) => {
        setTransactions([...transactions, newTransaction])
    }

    return (
        <>
            <Sidebar />
            <Main>
                <Account transactions={transactions} />
                <TransactionForm onRegister={onRegisterTransacion} />
            </Main>
            <div>
                <Statement allTransactions={transactions} />
            </div>
        </>
    )
}

export default Home
