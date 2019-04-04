import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 10px;
    width: 300px;
    hr {
        border: 1px solid lightgray;
        width: 100%;
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: baseline;
    aligh-content: center;
    justify-content: space-between;
    .fas {
        margin-right: 10px;
    }
`

export const CardProfile = styled.div`
    display: flex;
    .fas {
        font-size: 24px;
    }
`

export const CardEditor = styled.div`
    display: flex;
    .fas:hover {
        cursor: pointer;
    }
`

export const CardText = styled.p`
    .fas {
        margin-right: 10px;
    }
`



