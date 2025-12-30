import { useState } from 'react'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormActions from '@/components/Form/FormActions'
import Figure from '@/components/Form/Figure'
import Heading from '@/components/Form/Heading'
import Image from '@/components/Form/Image'
import FormLabel from '@/components/FormLabel'
import TextField from '@/components/TextField'

interface FormRegisterProps {
    onRegister: (user: {
        name: string
        email: string
        password: string
    }) => void
}

const FormRegister = ({ onRegister }: FormRegisterProps) => {
    const [user, setUser] = useState({ name: '', email: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    }

    const registerUser = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log(user)
        onRegister(user)
    }

    return (
        <>
            <Figure>
                <Image src="/imgs/register.png" />
            </Figure>
            <div>
                <Heading>Cadastro</Heading>
                <p>
                    Preencha os campos abaixo para
                    <br />
                    criar sua conta corrente!
                </p>
                <Form onSubmit={registerUser}>
                    <Fieldset>
                        <FormLabel>Nome</FormLabel>
                        <TextField
                            name="name"
                            placeholder="Digite seu nome completo"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </Fieldset>
                    <Fieldset>
                        <FormLabel>Email</FormLabel>
                        <TextField
                            name="email"
                            type="email"
                            placeholder="Digite seu email"
                            value={user.email}
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
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                    </Fieldset>
                    <FormActions>
                        <Button type="submit">Abrir conta</Button>
                    </FormActions>
                </Form>
            </div>
        </>
    )
}

export default FormRegister
