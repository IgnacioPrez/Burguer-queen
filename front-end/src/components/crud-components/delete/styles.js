import { styled } from 'styled-components'

export const InfoDelete = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 8em;
    gap: 30px;
`

export const QuestionDelte = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-size: 1.5rem;
        text-align: center;
        font-weight: bold;
        color: ${(props) => props.theme.FirstTextColor};
    }
`

export const ActionsBtn = styled.div`
    width: 100%;
    display: flex;
    max-width: 60%;
    justify-content: space-between;
    padding: 2px;
`
