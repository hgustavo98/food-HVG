import styled from 'styled-components';

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`;

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
  text-align: center;
  max-width: 10000rem; /* Ajuste o valor conforme necessário para tornar o componente mais largo */
  margin: 0 auto; /* Isso centraliza o componente na página */
`;

export const Title = styled.h1``;

export const SubTitle = styled.h4`
  margin: 1rem 0;
`;

export const Table = styled.table`
  margin: 0 auto;
`;

export const Button = styled.button<ButtonProps>` // Specify the ButtonProps interface
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#0056b3' : '#e9f7ff')};
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#0056b3')};
  }

  &:focus {
    outline: none;
  }
`;
