import type { LinkProps as RouterLinkProps } from 'react-router'
import { Link, StyledButton } from './styles'

interface ButtonBaseProps {
    outline?: boolean
}

interface LinkButtonProps extends ButtonBaseProps, RouterLinkProps {
    link: true
}

interface NativeButtonProps
    extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    link?: false
}

type ButtonProps = LinkButtonProps | NativeButtonProps

const Button = ({ outline, link, ...props }: ButtonProps) => {
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
