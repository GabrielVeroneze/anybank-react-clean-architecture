import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '@/infrastructure/supabase/config'
import { setSession } from './authSlice'

export const initAuth = createAsyncThunk(
    'auth/initAuth',
    async (_arg, { dispatch }) => {
        const { data } = await supabase.auth.getSession()
        dispatch(setSession(data.session))
        console.log('getSession', data.session)
        
        supabase.auth.onAuthStateChange((_event, session) => {
            dispatch(setSession(session))
            console.log('onAuthStateChange', session)
        })
    },
)

export const logout = createAsyncThunk('auth/logout', async () => {
    await supabase.auth.signOut()
})
