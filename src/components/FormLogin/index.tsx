import { useState } from 'react'
import { Button } from '@/components/Button'
import { Fieldset } from '@/components/Fieldset'
import { Figure, Form, FormActions, Heading, Image } from '@/components/Form'
import { FormLabel } from '@/components/FormLabel'
import { TextField } from '@/components/TextField'

interface FormLoginProps {
    onLogin: () => void
}

const FormLogin = ({ onLogin }: FormLoginProps) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }))
    }

    const loginUser = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log(credentials)
        onLogin()
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
