import React, { useState } from 'react';
import { Head } from '../../components/Head';
import { Container, Inner, SubTitle, Title } from './styled';
import {
  getPaidOrders,
  getCustomerOrders,
  getOrderItems,
  getOrdersWithItemsQuantityGreaterThan2,
  getCustomersTotalSpent,
  getCustomerTotalSpent,
  getCustomerTotalItems,getMonthlySales,
  getOrdersByCustomer,
  getSalesBySnack,
} from '../../services/api';

export default function StatusPage() {
  const [consoleOutput, setConsoleOutput] = useState('');
  const [customerId, setCustomerId] = useState('');

  // Função para fazer a chamada da API e exibir o resultado
  const handleButtonClick = async (action: string) => {
    try {
      let response;
      if (action === 'getCustomerOrders') {
        response = await getCustomerOrders(Number(customerId));
      } else if (action === 'getOrderItems') {
        response = await getOrderItems(Number(customerId));
      } else if (action === 'getCustomerTotalSpent') {
        response = await getCustomerTotalSpent(Number(customerId));
      } else if (action === 'getCustomerTotalItems') {
        response = await getCustomerTotalItems(Number(customerId));
      } else if (action === 'getPaidOrders') {
        response = await getPaidOrders();
      } else if (action === 'getOrdersWithItemsQuantityGreaterThan2') {
        response = await getOrdersWithItemsQuantityGreaterThan2();
      } else if (action === 'getCustomersTotalSpent') {
        response = await getCustomersTotalSpent();
      } else if (action === 'getMonthlySales') {
        response = await getMonthlySales();
      } else if (action === 'getOrdersByCustomer') {
        response = await getOrdersByCustomer();
      } else if (action === 'getSalesBySnack') {
        response = await getSalesBySnack();
      } else {
        response = { data: 'Ação inválida' };
      }
      setConsoleOutput(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setConsoleOutput(JSON.stringify(error, null, 2));
    }
  };


  return (
    <Container>
      <Head title='Status' />

      <Inner>
        <Title>Consultas SQL e Resultados</Title>

        <SubTitle>Consultas</SubTitle>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Esquerda: Campo para inserir o ID e botões que precisam dele */}
          <div style={{ marginRight: '20px' }}>
            <div>
              <label htmlFor="customerIdInput">Insira o ID:</label>
              <input
                type="text"
                id="customerIdInput"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <button onClick={() => handleButtonClick('getCustomerOrders')}>Obter Pedidos do Cliente</button>
              <button onClick={() => handleButtonClick('getOrderItems')}>Obter Itens do Pedido</button>
              <button onClick={() => handleButtonClick('getCustomerTotalSpent')}>
                Obter Gasto Total de um Cliente
              </button>
              <button onClick={() => handleButtonClick('getCustomerTotalItems')}>
                Obter Total de Itens de um Cliente
              </button>
            </div>
          </div>

          {/* Direita: Botões que não precisam do ID */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <button onClick={() => handleButtonClick('getPaidOrders')}>Obter Pedidos Pagos</button>
            <button onClick={() => handleButtonClick('getOrdersWithItemsQuantityGreaterThan2')}>
              Obter Pedidos com mais de 2 Itens
            </button>
            <button onClick={() => handleButtonClick('getCustomersTotalSpent')}> Obter Gastos Totais dos Clientes  </button>
            <h2>Relatórios</h2>
              <button onClick={() => handleButtonClick('getMonthlySales')}>Relatório de Vendas Mensais</button>
              <button onClick={() => handleButtonClick('getOrdersByCustomer')}>Relatório de Pedidos por Cliente</button>
              <button onClick={() => handleButtonClick('getSalesBySnack')}>Relatório de Vendas por Lanche</button>



          </div>
        </div>

        {/* Exibir o resultado para cada requisição */}
        <div>
          <h3>Resultado:</h3>
          <pre>{consoleOutput}</pre>
        </div>

        <br />
        <a href='/'>Voltar para a página inicial</a>
      </Inner>
    </Container>
  );
}
