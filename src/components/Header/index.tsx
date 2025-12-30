import { Link } from 'react-router'
import { IconAvatar, IconLogo } from '@/components/Icons'
import { Container, StyledHeader, List, ListItem } from './styles'
import Button from '@/components/Button'
import TransparentButton from '@/components/TransparentButton'

const Header = () => {
    const onAskForLogout = () => {
        console.log('logout')
    }

    return (
        <StyledHeader>
            <Container>
                <List>
                    <ListItem>
                        <Link to="/">
                            <IconLogo />
                        </Link>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <Button link to="/auth/register">
                            Abrir conta
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button outline link to="/auth/login">
                            Login
                        </Button>
                    </ListItem>
                    <ListItem>Joana da Silva Oliveira</ListItem>
                    <ListItem>
                        <IconAvatar />
                    </ListItem>
                    <ListItem>
                        <TransparentButton onClick={onAskForLogout}>
                            Logout
                        </TransparentButton>
                    </ListItem>
                </List>
            </Container>
        </StyledHeader>
    )
}

export default Header
