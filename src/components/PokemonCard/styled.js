import styled from "styled-components"
import { BackGroundColor, CardColor } from "../../constants/colors"
import { HeaderColor } from "../../constants/colors"

export const Card = styled.div`
height: 18vw;
width: 12.5vw;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: ${CardColor};
box-shadow: 2px 2px 5px lightgray;
border: 1px solid gray;
overflow: hidden;
@media(max-width: 400px) {
    width: 90vw;
    flex-direction: row;
    margin: 0 auto;
    align-items: space-around;
  }
img {
    height: 13vh;
    margin-top: 35px;
    @media(max-width: 400px) {
    height: 90%;
  }
}
h2 {
    font-size: 18px;
    @media(max-width: 400px) {
    font-size: 10px;
  }
}
`

export const ContainerButtons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 108%;
margin-bottom: 10px;
@media(max-width: 400px) {
flex-direction: column;
}
`

export const LeftButton = styled.div`
    width: 50%;
    height: 2.6em;
    border: 1px solid gray;
    cursor: pointer;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 2px;
    margin-top: 25px;
    background-color: ${HeaderColor};
    color: ${BackGroundColor};
    font-weight: bold;
`

export const RightButton = styled.div`
    width: 50%;
    height: 2.6em;
    border: 1px solid gray;
    cursor: pointer;
    font-size: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
    margin-top: 25px;
    background-color: ${HeaderColor};
    color: ${BackGroundColor};
    font-weight: bold;
`