import { useState } from 'react'
import { toast } from 'react-toastify'
import { CreateUser } from '@/domain/useCases/CreateUser'
import { UserSupabaseRepository } from '@/infrastructure/supabase/UserSupabaseRepository'
import Button from '@/components/Button'
import Fieldset from '@/components/Fieldset'
import Form from '@/components/Form'
import FormActions from '@/components/Form/FormActions'
import Figure from '@/components/Form/Figure'
import Heading from '@/components/Form/Heading'
import Image from '@/components/Form/Image'
import FormLabel from '@/components/FormLabel'
import TextField from '@/components/TextField'

const userSupabaseRepository = new UserSupabaseRepository()
const createUser = new CreateUser(userSupabaseRepository)

const Register = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    }

    const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await createUser.execute(user)

            toast.success('Usuário registrado com sucesso!')
            setUser({ name: '', email: '', password: '' })
        } catch (error) {
            console.log('Falha ao cadastrar usuário', error)
            toast.error('Falha ao cadastrar usuário')
        }
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

export default Register
