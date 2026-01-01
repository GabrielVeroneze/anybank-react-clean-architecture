import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { initAuth } from '@/app/store/auth/authThunks'
import { Container } from './styles'
import type { AppDispatch } from '@/app/store'
import Header from '@/components/Header'

const RootLayout = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(initAuth())
    }, [dispatch])

    return (
        <>
            <ToastContainer />
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default RootLayout
