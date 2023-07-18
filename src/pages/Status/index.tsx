import { useState } from 'react';
import { Head } from '../../components/Head';
import { Container, Inner, SubTitle, Title, Table } from './styled';

export default function StatusPage() {
  // Dados simulados das consultas e resultados (substitua por dados reais da sua API)
  const consultasEResultados = [
    {
      descricao: 'Consulta 1: Descrição da Consulta 1',
      comando_sql: 'SELECT nome_produto, SUM(quantidade) AS total_quantidade FROM produtos WHERE preco > 100 GROUP BY nome_produto ORDER BY total_quantidade DESC;',
      resultado: [
        { nome_produto: 'Smartphone', total_quantidade: 230 },
        { nome_produto: 'Notebook', total_quantidade: 120 },
        { nome_produto: 'Smart TV', total_quantidade: 80 },
      ]
    },
    {
      descricao: 'Consulta 2: Descrição da Consulta 2',
      comando_sql: 'SELECT nome_cliente, COUNT(id) AS total_pedidos FROM pedidos GROUP BY nome_cliente;',
      resultado: [
        { nome_cliente: 'João', total_pedidos: 10 },
        { nome_cliente: 'Maria', total_pedidos: 8 },
        { nome_cliente: 'Pedro', total_pedidos: 5 },
      ]
    },
    // Adicione mais consultas aqui
  ];

  // Estado para controlar qual consulta está sendo exibida
  const [currentConsulta, setCurrentConsulta] = useState(0);

  // Estado para controlar a exibição do comando SQL
  const [showSQL, setShowSQL] = useState(false);

  // Função para avançar para a próxima consulta
  const handleNextConsulta = () => {
    setCurrentConsulta((prevConsulta) => (prevConsulta + 1) % consultasEResultados.length);
  };

  // Função para voltar para a consulta anterior
  const handlePrevConsulta = () => {
    setCurrentConsulta((prevConsulta) => (prevConsulta - 1 + consultasEResultados.length) % consultasEResultados.length);
  };

  const consultaAtual = consultasEResultados[currentConsulta];

  // Função para renderizar os cabeçalhos da tabela
  const renderTableHeaders = () => {
    if (consultaAtual.resultado.length === 0) {
      return null;
    }

    const headers = Object.keys(consultaAtual.resultado[0]);
    return (
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );
  };

  // Função para renderizar os dados da tabela
  const renderTableData = () => {
    return consultaAtual.resultado.map((item, index) => (
      <tr key={index}>
        {Object.values(item).map((value, index) => (
          <td key={index}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <Container>
      <Head title='Status' />

      <Inner>
        <Title>Consultas SQL e Resultados</Title>

        <div>
          <button onClick={handlePrevConsulta}>Anterior</button>
          <button onClick={handleNextConsulta}>Próxima</button>
        </div>

        <SubTitle>{consultaAtual.descricao}</SubTitle>
        <button onClick={() => setShowSQL(!showSQL)}>Mostrar Comando SQL</button>
        {showSQL && (
          <p>
            <strong>Comando SQL:</strong>
            <code>{consultaAtual.comando_sql}</code>
          </p>
        )}
        <p>
          <strong>Resultado:</strong>
          <Table>
            <thead>
              {renderTableHeaders()}
            </thead>
            <tbody>
              {renderTableData()}
            </tbody>
          </Table>
        </p>

        <br />
        <a href='/'>Voltar para a página inicial</a>
      </Inner>
    </Container>
  )
}
