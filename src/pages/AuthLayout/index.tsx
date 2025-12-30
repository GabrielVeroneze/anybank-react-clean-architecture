import { Outlet } from 'react-router'
import BaseCard from '@/components/Card'
import styled from 'styled-components'

const Card = styled(BaseCard)`
    display: flex;
    gap: 16px;
    margin: 24px auto;
`

const AuthLayout = () => {
    return (
        <Card>
            <Outlet />
        </Card>
    )
}

export default AuthLayout
