import React from "react";
import { AbTag, TagProps } from '../src/Componentes/Abtag/AbTag'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbTag',
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag {...args} />

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Android'
} as TagProps