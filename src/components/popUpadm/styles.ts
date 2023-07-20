import { darken } from 'polished'

import styled from 'styled-components'


export const Container = styled.button`
  position: fixed;
  top: 3rem;
  right: 26rem;
  cursor: pointer;
  border: none;
  overflow: auto;
  margin: 0; /* Remova qualquer margem padrão do body para evitar espaçamento indesejado */
  padding: 0;

  background: ${({ theme }) => theme.colors.gray800};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${darken(0.1, '#AA2424')};
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  span:last-child {
    margin-left: 0.75rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }

  /* Screen reader text */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 720px) {
    top: 0.5rem;
    right: initial;
    left: 1.5rem;
  }

`
export const PopupContent = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.gray800};
  padding: 20px;
  text-align: left;
  white-space: pre-wrap; /* Para quebrar o texto em várias linhas */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: auto; /* Use "hidden" para ocultar o conteúdo que exceder o tamanho */
  max-height: 80vh; /* Defina a altura máxima do pop-up */

  /* Adicione a propriedade z-index */
  z-index: 9999;

  /* O conteúdo do pop-up será rolável quando exceder a altura máxima */
  p {
    white-space: pre-wrap;
    font-family: monospace;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  /* Adicionando borda inferior para simular as linhas verticais */
  p::before {
    content: '';
    display: block;
    width: 4px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px 0 0 4px;
  }

  /* Alinhando o texto à direita do divisor vertical */
  p {
    padding-left: 10px;
    position: relative;
  }

`;

export const CloseButton = styled.button`
  background-color: #e74c3c;
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
`;



