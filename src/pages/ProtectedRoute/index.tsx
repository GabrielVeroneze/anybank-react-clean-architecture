import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store'

const ProtectedRoute = () => {
    const session = useSelector((state: RootState) => state.auth.session)
    const navigate = useNavigate()

    useEffect(() => {
        if (!session) {
            navigate('/auth/login')
        }
    }, [session, navigate])

    return <Outlet />
}

export default ProtectedRoute
