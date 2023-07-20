import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
  text-align: center;
`

export const Title = styled.h1``

export const SubTitle = styled.h4`
  margin: 1rem 0;
`


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  white-space: pre-wrap; /* Para quebrar o texto em várias linhas */
  font-family: inherit; /* Usar a mesma fonte do contêiner pai */
  font-size: inherit; /* Usar o mesmo tamanho de fonte do contêiner pai */
;

  th,
  td {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 8px;
    text-align: left;
    font-family: inherit; /* Usar a mesma fonte do contêiner pai */
    font-size: inherit; /* Usar o mesmo tamanho de fonte do contêiner pai */
  }

  th {
    background-color: ${({ theme }) => theme.colors.primary};
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
