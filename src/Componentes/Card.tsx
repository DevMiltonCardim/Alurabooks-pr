import React, { ReactNode } from "react"
import styled from "styled-components";

export interface CardProps {
  children: ReactNode;
}

const CardEstilizado = styled.section`
  padding: 48px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

export const Card = ({ children }: CardProps) => {
  return (
    <CardEstilizado>
      {children}
    </CardEstilizado>
  )
}