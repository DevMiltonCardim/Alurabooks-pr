import React, { Children, ReactNode } from "react";
import styled from "styled-components";

export interface CampoTextoProps {
  children: ReactNode;
}

const InputEstilizado = styled.section`
  font-family: sans-serif;
  .labelEmail {
    display: flex;
    flex-direction: column;
  }
  
  .labelEmail p {
    margin-top: 0;
    margin-bottom: 5px;
    padding-left: 15px;
    color: #002F52;
    font-weight: 600;
  }

  .inputEmail {
    width: 300px;
    height: 6vh;
    border: 1px solid #002F52;
    border-radius: 15px;
    padding-top: 2px;
    padding-left: 15px;
  }
`

export const CampoTexto: React.FC<CampoTextoProps> = ({ children }) => {
  return (
    <InputEstilizado>
      {children}
    </InputEstilizado>
  );
}