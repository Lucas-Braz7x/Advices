import { useEffect, useState } from 'react';
import { Container, NarutoImg, TextWrapper } from './styles';
import { Quotes } from '../../components/Quotes';

import jutsoSound from '../../sounds/jutso.mp3'
import imgNaruto from '../../assets/naruto.png';

const audio = new Audio(jutsoSound);

export const Home = () => {
  const [quote, setQuote] = useState('');

  const loadingQuotes = async () => {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();

    await audio.play();
    if (quote !== data) {
      setQuote(data.slip.advice);
    } else {
      response = await fetch("https://api.adviceslip.com/advice");
      data = await response.json();
      setQuote(data.slip.advice);
    }
  }

  useEffect(() => {
    loadingQuotes();
  }, [])

  return (
    <Container>
      <TextWrapper>
        <Quotes quote={quote} loadingQuotes={loadingQuotes} />
      </TextWrapper>
      <NarutoImg src={imgNaruto} alt="Imagem do naruto" />
    </Container>
  )

};