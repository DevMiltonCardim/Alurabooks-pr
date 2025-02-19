import React from "react";

import { CampoTexto, CampoTextoProps } from "../src/Componentes/AbCampoTexto/AbCampoTexto"

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Componentes/CampoTexto',
  component: CampoTexto
} as ComponentMeta<typeof CampoTexto>

export const CampoTextoComponent = () => {
  return (
    <CampoTexto>
      <div>
        <label className="labelEmail" htmlFor="">
          <p>E-mail</p>
          <input className="inputEmail" type="text" placeholder="seuemail@maneiro.com.br" />
        </label>
      </div>
    </CampoTexto>
  )
}