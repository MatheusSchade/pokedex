import styled from "styled-components"

export const GridCard = styled.div`
width: 95%;
margin: 0 auto;
margin-top: 15px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
row-gap: 10px;
column-gap: 10px;
scroll-behavior: inherit;
@media(max-width: 400px) {
    display: flex;
    flex-direction: column;
}
`