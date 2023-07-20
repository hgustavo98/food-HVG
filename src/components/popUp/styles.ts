import { darken } from 'polished'

import styled from 'styled-components'


export const Container = styled.button`
  position: fixed;
  top: 5rem;
  right: 1.5rem;
  cursor: pointer;
  border: none;

  background: ${({ theme }) => theme.colors.red};
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
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.black};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  /* Adicione a propriedade z-index */
  z-index: 9999;
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

