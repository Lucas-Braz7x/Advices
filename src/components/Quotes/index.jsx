import { useEffect } from 'react';
import { Button } from '../Button';
import { Quote, Speaker } from './styles';

export const Quotes = ({ quote, loadingQuotes }) => {

  return (
    <>
      <Quote>{quote}</Quote>
      <Speaker>-Provavelmente uma frase que você conhece</Speaker>
      <Button primary onClick={loadingQuotes}>Conselhos do dia à dia</Button>
    </>
  )
}