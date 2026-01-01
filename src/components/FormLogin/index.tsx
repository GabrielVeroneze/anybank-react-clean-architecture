import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { login } from '@/app/store/auth/authThunks'
import type { AppDispatch } from '@/app/store'
import type { LoginCredentials } from '@/types/LoginCredentials'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormActions from '@/components/Form/FormActions'
import Figure from '@/components/Form/Figure'
import Heading from '@/components/Form/Heading'
import Image from '@/components/Form/Image'
import FormLabel from '@/components/FormLabel'
import TextField from '@/components/TextField'

const FormLogin = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }))
    }

    const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await dispatch(login(credentials))

            toast.success('Boas-vindas ao AnyBank!')
        } catch (error) {
            console.log('Falha ao efetuar login', error)
            toast.error('Falha ao efetuar login, confirme seu e-mail e senha.')
        }
    }

    return (
        <>
            <Figure>
                <Image src="/imgs/login.png" />
            </Figure>
            <div>
                <Heading>Login</Heading>
                <p>Preencha os dados do login.</p>
                <Form onSubmit={loginUser}>
                    <Fieldset>
                        <FormLabel>Email</FormLabel>
                        <TextField
                            name="email"
                            type="email"
                            placeholder="Digite seu email"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                        />
                    </Fieldset>
                    <Fieldset>
                        <FormLabel>Senha</FormLabel>
                        <TextField
                            name="password"
                            type="password"
                            placeholder="Digite sua senha"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </Fieldset>
                    <FormActions>
                        <Button type="submit">Efetuar login</Button>
                    </FormActions>
                </Form>
            </div>
        </>
    )
}

export default FormLogin
