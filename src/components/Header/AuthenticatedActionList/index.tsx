import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { logout } from '@/app/store/auth/authThunks'
import { IconAvatar } from '@/components/Icons'
import { List, ListItem } from '../styles'
import type { AppDispatch } from '@/app/store'
import TransparentButton from '@/components/TransparentButton'

const AuthenticatedActionList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const onAskForLogout = async () => {
        try {
            await dispatch(logout())

            toast.success('Logout realizado com sucesso!')
            navigate('/auth/login')
        } catch (error) {
            console.error('Falha ao fazer logout', error)
            toast.error('Não foi possível realizar o logout!')
        }
    }

    return (
        <List>
            <ListItem>Boas vindas!</ListItem>
            <ListItem>
                <IconAvatar />
            </ListItem>
            <ListItem>
                <TransparentButton onClick={onAskForLogout}>
                    Logout
                </TransparentButton>
            </ListItem>
        </List>
    )
}

export default AuthenticatedActionList
