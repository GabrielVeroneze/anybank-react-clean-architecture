import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initAuth, login } from './authThunks'
import type { Session } from '@supabase/supabase-js'

interface AuthState {
    session: Session | null
    loading: boolean
}

const initialState: AuthState = {
    session: null,
    loading: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<Session | null>) => {
            state.session = action.payload
            state.loading = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initAuth.pending, (state) => {
                state.loading = true
            })
            .addCase(initAuth.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state) => {
                state.loading = false
            })
    },
})

export const { setSession } = authSlice.actions

export default authSlice.reducer
