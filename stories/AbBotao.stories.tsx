import React from "react";

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AbBotao, AbBotaoProps } from '../src'

export default {
  title: 'Components/AbBotao',
  component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args} />

export const primario = Template.bind({})

primario.args = {
  texto: 'Ab Botão primario',
  tipo: 'primario'
} as AbBotaoProps

export const secundario = Template.bind({})

secundario.args = {
  texto: 'Ab Botão secundario',
  tipo: 'secundario'
} as AbBotaoProps