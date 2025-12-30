import { Outlet } from 'react-router'
import { Card } from './styles'

const AuthLayout = () => {
    return (
        <Card>
            <Outlet />
        </Card>
    )
}

export default AuthLayout
