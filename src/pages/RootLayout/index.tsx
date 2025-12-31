import { Outlet } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { Container } from './styles'
import Header from '@/components/Header'

const RootLayout = () => {
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
