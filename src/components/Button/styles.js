import React from 'react';
import styled from 'styled-components';

export const Buttons = styled.button`
  background: #DC872C};
  color: #fff;
  
  border: none;
  border-radius: 0;
  
  font-size: 1.5em;
  font-family: 'New Tegomin', serif, monospace;

  padding: 10px 20px;

  cursor: pointer;
  box-shadow: 3px 3px #333;

  perspective: 1000;
  transition: transform .8s, filter .5s;

  &:hover{
    filter: brightness(.8);
    transform: scale(.9);
  }
  
  @media(max-width: 1015px) {
   font-size: 1.2em;
  }
  @media(max-width: 370px) {
   font-size: 1em;
  }
`;