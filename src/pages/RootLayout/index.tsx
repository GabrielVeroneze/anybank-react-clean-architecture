import { Outlet } from 'react-router'
import { Container } from './styles'
import Header from '@/components/Header'

const RootLayout = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default RootLayout
