import { createBrowserRouter } from 'react-router'
import Home from '@/pages/Home'
import RootLayout from '@/pages/RootLayout'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import AuthLayout from '@/pages/AuthLayout'
import ProtectedRoute from '@/pages/ProtectedRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                ],
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: <Login />,
                    },
                    {
                        path: 'register',
                        element: <Register />,
                    },
                ],
            },
        ],
    },
])
