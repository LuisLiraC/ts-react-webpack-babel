import styled from 'styled-components'

export const Title = styled.h1`
  color: white;
  background-color: black;
  padding: 20px;
  margin: 0;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;

  p {
    font-size: 48px;
    font-weight: bold;
  }
`

export const Image = styled.img`
  height: 100px;
  width: auto;
  margin: 30px;
`

export const ChampionImage = styled.img`
  height: 100px;
`

export const ChampionName = styled.p`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`
