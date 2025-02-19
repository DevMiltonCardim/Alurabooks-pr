import React, { ReactNode } from "react"
import styled from "styled-components";

export interface CardProps {
  children: ReactNode;
}

// tamanho para desktop

const CardEstilizado = styled.section`
  width: 30vw;
  height: 65vh;
  padding-left: 2vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: sans-serif;
  margin: 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 2vw;
    padding-top: 8vh;
    height: 5vh;
  }

  .imagensm {
    width: 25px;
    padding-right: 5px;
  }

  h2 {
    color: #EB9B00;
    font-size: 22px;
  }

  h4 {
    color: #002F52;
  }

  h1 {
    color: #002F52;
    margin: 0;
  }

  .paragrafo-comum {
    font-size: 12px;
  }

  .paragrafo-ap {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.58);
    padding-top: 5vh;
  }

  .divbloco-inferior {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 2vw;
  }

  .botao-comprar {
    padding-top: 7vh;
  }

  @media (max-width: 410px) {
    width: 50vw;
  }

  @media (max-width: 600px) {
    width: 60vw;

    .imagensm {
      width: 23px;
    }
  }

  @media (max-width: 1000px) {
    width: 50vw;
  }
`

export const Card = ({ children }: CardProps) => {
  return (
    <CardEstilizado>
      {children}
    </CardEstilizado>
  )
}