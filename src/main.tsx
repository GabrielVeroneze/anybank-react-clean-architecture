import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { router } from '@/router'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
    </StrictMode>,
)
