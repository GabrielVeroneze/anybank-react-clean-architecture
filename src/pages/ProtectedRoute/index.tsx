import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store'

const ProtectedRoute = () => {
    const { session, loading } = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (loading) return

        if (!session) {
            navigate('/auth/login')
        }
    }, [session, loading, navigate])

    if (loading) {
        return null
    }

    return <Outlet />
}

export default ProtectedRoute
