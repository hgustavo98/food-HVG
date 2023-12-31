import styled from 'styled-components'

import { darken } from 'polished'

export const Container = styled.ul`
  cursor: pointer;
  right: 1rem;
  bottom: 0.5rem;

  background: ${({ theme }) => theme.colors.red};
  padding: 0.5rem ;
  border-radius: 0.5rem;

  display: flex;
  align-items: top;

  transition: background 0.3s;

  &:hover {
    ${({ theme }) => theme.colors.red};
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 1rem;
    height: 2rem;
  }

  span:last-child {
    margin-left: 0.75rem;
    font-weight: 300;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: 720px) {
    top: 1rem;
    bottom: initial;


    span:first-child {
      display: none;
    }

  }
`

export const Button = styled.li`
  cursor: pointer;
  /* Estilos do botão... */
    background: ${({ theme }) => theme.colors.red};;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.red};
  }


    span {
      margin-right: 0.25rem;
      font-weight: 500;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
    }

`;

export const Option = styled.li`

  background: ${({ theme }) => theme.colors.red};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, '#AA2424')};

      li {
  /* Compartilhe estilos comuns entre botões e opções */
  background: ${({ theme }) => theme.colors.red};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition: background 0.3s;
  cursor: pointer;
  }


    span {
      margin-left: 0.75rem;
      font-weight: 500;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
    }
    &.active {
    background: ${({ theme }) => theme.colors.red};
  }

  &:hover {
    background: ${darken(0.1, '#AA2424')};
  }
}

@media (max-width: 720px) {
  li {
    /* Mostra as opções em coluna */
    flex-direction: column;
    align-items: flex-start;

    /* Aumenta o padding para facilitar o clique */
    padding: 0.75rem 1rem;
  }
}

`
