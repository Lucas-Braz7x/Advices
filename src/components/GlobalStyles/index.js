import styled, { createGlobalStyle } from 'styled-components';
import bgImg from '../../assets/bg.jpeg';

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    color: #332c36;
    font-family: 'New Tegomin', serif;
    background: url(${bgImg}) no-repeat center;
    background-size: cover; 
    overflow-y: hidden;
  }

`