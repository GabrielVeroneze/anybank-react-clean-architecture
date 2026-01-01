import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { IconLogo } from '@/components/Icons'
import { Container, StyledHeader, List, ListItem } from './styles'
import type { RootState } from '@/app/store'
import AuthenticatedActionList from './AuthenticatedActionList'
import UnauthenticatedActionList from './UnauthenticatedActionList'

const Header = () => {
    const session = useSelector((state: RootState) => state.auth.session)

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
                {session ? (
                    <AuthenticatedActionList />
                ) : (
                    <UnauthenticatedActionList />
                )}
            </Container>
        </StyledHeader>
    )
}

export default Header
