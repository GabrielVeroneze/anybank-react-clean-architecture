import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '@/infrastructure/supabase/config'
import { setSession } from './authSlice'
import type { LoginCredentials } from '@/types/LoginCredentials'

export const initAuth = createAsyncThunk<void, void>(
    'auth/initAuth',
    async (_arg, { dispatch }) => {
        const { data } = await supabase.auth.getSession()
        dispatch(setSession(data.session))

        supabase.auth.onAuthStateChange((_event, session) => {
            dispatch(setSession(session))
        })
    },
)

export const login = createAsyncThunk<void, LoginCredentials>(
    'auth/login',
    async (credentials) => {
        const { error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
        })

        if (error) {
            throw error
        }
    },
)

export const logout = createAsyncThunk<void, void>('auth/logout', async () => {
    await supabase.auth.signOut()
})
