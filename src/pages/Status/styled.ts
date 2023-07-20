import styled from 'styled-components';

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 0rem;
  margin: 0 auto;
  overflow: auto;
`;

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
  text-align: center;
  max-width: auto; /* Ajuste o valor conforme necessário para tornar o componente mais largo */
  margin: 0 auto; /* Isso centraliza o componente na página */
  overflow: auto;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h4`
  margin: 1rem 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  white-space: pre-wrap; /* Para quebrar o texto em várias linhas */
  font-family: inherit; /* Usar a mesma fonte do contêiner pai */
  font-size: inherit; /* Usar o mesmo tamanho de fonte do contêiner pai */

  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 8px;
    text-align: center;
    font-family: inherit; /* Usar a mesma fonte do contêiner pai */
    font-size: inherit; /* Usar o mesmo tamanho de fonte do contêiner pai */
  }

  th {
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    text-align: center; /* Alinhar as labels ao centro */
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray300};
  }

  tr:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export const Button = styled.button<ButtonProps>` // Specify the ButtonProps interface
  background-color: ${({ isSelected }) => (isSelected ? '#007bff' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#007bff')};
  margin: 1rem 0;
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 8px  1rem;
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
