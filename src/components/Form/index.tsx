import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    width: 350px;
    max-width: 100%;

    figure {
        margin: 0;
        display: flex;
        justify-content: center;
    }

    img {
        margin: 0 auto;
        max-width: 330px;
    }

    h2 {
        margin: 32px 0;
        font-size: 20px;
        font-weight: 700;
    }
`

export default Form
