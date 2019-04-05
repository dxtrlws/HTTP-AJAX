import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
    padding: 10px;
    width: 300px;
    box-shadow: 6px 10px 5px 0px rgba(0,0,0,0.19);
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



