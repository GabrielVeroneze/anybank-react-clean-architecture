import { Outlet } from 'react-router'
import { Header } from '@/components/Header'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 24px;
    width: 1200px;
    margin: 24px auto;
`

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
