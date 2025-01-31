import React from "react";

import imgSacola from '../src/assets/Sacola.png';
import imgFavorito from '../src/assets/Favoritos.png';

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "../src";
import { AbTag } from "../src/Componentes/Abtag/AbTag";


export default {
  title: 'Componentes/Card',
  component: Card
} as ComponentMeta<typeof Card>

export const CardComponent = () => {
  return (
    <Card>
      <header>
        <h2>Sobre o livro:</h2>
        <div className="divImg">
          <img className="imagensm" src={imgSacola} alt="Sacola" />
          <img className="imagensm" src={imgFavorito} alt="Favorito" />
        </div>
      </header>
      <h4>Liderança em Design</h4>
      <p className="paragrafo-comum">Habilidades de gestão para alavancar sua carreira <br /> Por: Milton Cardim</p>
      <div className="divbloco-inferior">
        <div>
          <p className="paragrafo-ap">A partir de:</p>
          <h1>R$ 29,90</h1>
        </div>
        <div className="botao-comprar">
          <AbTag texto="Comprar" />
        </div>
      </div>
    </Card>
  )
}