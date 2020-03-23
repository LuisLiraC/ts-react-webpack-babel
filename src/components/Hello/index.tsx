import React, { useEffect, useState } from 'react'
import { Title, Image, ImgContainer, ChampionImage, ChampionName } from './styles'
import { Champion } from '../../models/champion'
import WebpackLogo from '../../assets/webpack-logo.png'
import ReactLogo from '../../assets/react-logo.png'
import TypescriptLogo from '../../assets/ts-logo.png'
import BabelLogo from '../../assets/babel-logo.png'
import axios from 'axios'

export const Hello: React.FC = () => {
  const [champion, setChampion] = useState<Champion>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get<Champion>('https://api-lol.herokuapp.com/api/champions/teemo')
      .then(({ data }) => setChampion(data))
  }

  return (
    <>
      <Title color='#007ACC'>Hello React Developer!</Title>
      <ImgContainer>
        <Image src={ReactLogo} alt="webpack" />
        <p>+</p>
        <Image src={TypescriptLogo} alt="webpack" />
        <p>+</p>
        <Image src={BabelLogo} alt="webpack" />
        <p>+</p>
        <Image src={WebpackLogo} alt="webpack" />
      </ImgContainer>
      {
        champion && (
          <div>
            <ChampionImage src={champion.champion_image} alt="champion_img" />
            <ChampionName>{champion.name}</ChampionName>
          </div>
        )
      }
    </>
  )
}