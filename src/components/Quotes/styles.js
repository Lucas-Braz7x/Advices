import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const renderAnimation = keyframes`
  from {transform: scale(0);}
  to{transform: scale(1);}
`;


export const Quote = styled.p`
  font-size: 2em;
  margin: 0;
  animation: ${renderAnimation} 2s ease;

  @media(max-width: 1015px) {
   font-size: 1.5em;
  }
  @media(max-width: 1015px) {
   font-size: 1.2em;
  }
`;

export const Speaker = styled(Quote)`
  font-size: 1em;
  text-align: right;
  margin-bottom: 50px;
  animation: none;
`;