import React from "react";
import styled from "styled-components";

export interface TagProps {
  texto: string
}

const TagEstilizada = styled.div`
  padding: 12px 28px; 
  max-width: min-content;
  text-align: center;
  background: #EB9B00;
  color: #FFF;
  font-weight: 600;
  font-size: 18px;
  font-family: sans-serif;
  cursor: pointer;
`

export const AbTag = ({ texto }: TagProps) => {
  return (
    <TagEstilizada>
      {texto}
    </TagEstilizada>
  )
}