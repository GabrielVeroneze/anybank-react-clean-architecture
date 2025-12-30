import { Link as RouterLink } from 'react-router'
import styled, { css } from 'styled-components'

const sharedStyles = css<{ $outline?: boolean }>`
    cursor: pointer;
    background-color: ${({ $outline }) =>
        $outline ? 'transparent' : '#90DDFF'};
    border: 2px solid #90ddff;
    border-radius: 16px;
    color: ${({ $outline }) => ($outline ? '#90DDFF' : '#000')};
    font-size: 16px;
    font-weight: 600;
    padding: 8px 16px;
    white-space: nowrap;

    &:hover {
        opacity: 0.8;
    }
`

export const StyledButton = styled.button<{ $outline?: boolean }>`
    ${sharedStyles}
`

export const Link = styled(RouterLink)<{ $outline?: boolean }>`
    ${sharedStyles}
    text-decoration: none;
`
