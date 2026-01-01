import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { router } from '@/router'
import { store } from '@/app/store'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
)
