import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  position: fixed;
  top: 3rem;
  right: 32rem;
  cursor: pointer;
  border: none;
  overflow: auto;
  margin: 0; /* Remova qualquer margem padrão do body para evitar espaçamento indesejado */
  padding: 0;

  background: ${({ theme }) => theme.colors.gray800};
  padding: 0.5rem 0.5rem;
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
