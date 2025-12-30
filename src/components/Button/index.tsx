import type { LinkProps as RouterLinkProps } from 'react-router'
import { Link, StyledButton } from './styles'

interface ButtonBaseProps {
    outline?: boolean
}

interface CustomLinkProps extends ButtonBaseProps, RouterLinkProps {
    link: true
}

interface ButtonProps
    extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    link?: false
}

type Props = CustomLinkProps | ButtonProps

const Button = ({ outline, link, ...props }: Props) => {
    if (link) {
        return <Link $outline={outline} {...(props as RouterLinkProps)} />
    }

    return (
        <StyledButton
            $outline={outline}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        />
    )
}

export default Button
