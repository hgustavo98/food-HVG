import React, { useState } from 'react';
import { Head } from '../../components/Head';
import { Container, Inner, SubTitle, Table, Title } from './styled';
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

import {
  CustomerOrder,
  OrderItem,
  CustomerTotalSpent,
  CustomerTotalItems,
  PaidOrder,
  OrderWithItemsGreaterThan2,
  MonthlySalesReport,
  OrdersByCustomerReport,
  SalesBySnackReport,
  CustomersTotalSpent
,
} from './/type';
import { PopUpadm } from '../../components/popUpadm';
import { HtmlB } from '../../components/popUpAv';
import { PopUpD } from '../../components/popUpD';


export default function StatusPage() {
  const [consoleOutput, setConsoleOutput] = useState('');
  const [customerId, setCustomerId] = useState('');




  const formatPaidOrders = (data: PaidOrder[]) => {
    return data.map((order) => `Lanche: ${order.snack.name}, Cliente: ${order.order.customer.fullName}`).join('\n');
  };

  const formatCustomerOrders = (data: CustomerOrder[]) => {
    return data.map((order) => `ID: ${order.id}, Status: ${order.status}, Total: R$ ${order.total}`).join('\n');
  };

  const formatOrderItems = (data: OrderItem[]) => {
    return data.map((item) => `Lanche: ${item.snack.name}, Quantidade: ${item.quantity}`).join('\n');
  };

  const formatOrdersWithItemsGreaterThan2 = (data: OrderWithItemsGreaterThan2[]) => {
    return data.map((order) => `ID: ${order.id}, Status: ${order.status}, Total: R$ ${order.total}`).join('\n');
  };

  const formatCustomersTotalSpent = (data: CustomersTotalSpent[]) => {
    return data.map((customer) => {
      const totalSpent = customer.orders.reduce((acc, order) => acc + parseFloat(order.total), 0).toFixed(2);
      return `Cliente: ${customer.fullName}, Gasto Total: R$ ${totalSpent}`;
    }).join('\n');
  };

  const formatCustomerTotalSpent = (data: CustomerTotalSpent) => {
    return `Gasto Total: R$ ${data._sum.total}`;
  };

  const formatCustomerTotalItems = (data: CustomerTotalItems) => {
    return `Total de Itens: ${data._sum.quantity}`;
  };

  const formatMonthlySales = (data: MonthlySalesReport[]) => {
    return data.map((report) => `Mês: ${report.month}, Vendeu: R$ ${report.totalSales}`).join('\n');
  };

  const formatOrdersByCustomer = (data: OrdersByCustomerReport[]) => {
    return data.map((customer) => {
      const orders = customer.orders.map((order) => `ID do Pedido: ${order.id}, Total: R$ ${order.total}`).join('\n');
      return `Cliente: ${customer.fullName}\n${orders}`;
    }).join('\n\n');
  };

  const formatSalesBySnack = (data: SalesBySnackReport[]) => {
    return data.map((report) => `ID do Lanche: ${report.snackId}, Quantidade Vendida: ${report._sum.quantity}`).join('\n');
  };







  // Função para fazer a chamada da API e exibir o resultado
  const handleButtonClick = async (action: string) => {
    try {
      let response;
      switch (action) {


        case 'getPaidOrders':
          response = await getPaidOrders();
          setConsoleOutput(formatPaidOrders(response.data));
          break;
        case 'getCustomerOrders':
          response = await getCustomerOrders(Number(customerId));
          setConsoleOutput(formatCustomerOrders(response.data));
          break;
        case 'getOrderItems':
          response = await getOrderItems(Number(customerId));
          setConsoleOutput(formatOrderItems(response.data));
          break;
        case 'getOrdersWithItemsQuantityGreaterThan2':
          response = await getOrdersWithItemsQuantityGreaterThan2();
          setConsoleOutput(formatOrdersWithItemsGreaterThan2(response.data));
          break;
        case 'getCustomersTotalSpent':
          response = await getCustomersTotalSpent();
          setConsoleOutput(formatCustomersTotalSpent(response.data));
          break;
        case 'getCustomerTotalSpent':
          response = await getCustomerTotalSpent(Number(customerId));
          setConsoleOutput(formatCustomerTotalSpent(response.data));
          break;
        case 'getCustomerTotalItems':
          response = await getCustomerTotalItems(Number(customerId));
          setConsoleOutput(formatCustomerTotalItems(response.data));
          break;
        case 'getMonthlySales':
          response = await getMonthlySales();
          setConsoleOutput(formatMonthlySales(response.data));
          break;
        case 'getOrdersByCustomer':
          response = await getOrdersByCustomer();
          setConsoleOutput(formatOrdersByCustomer(response.data));
          break;
        case 'getSalesBySnack':
          response = await getSalesBySnack();
          setConsoleOutput(formatSalesBySnack(response.data));
          break;



        default:
          setConsoleOutput('Ação inválida');
      }
    } catch (error) {
      setConsoleOutput(JSON.stringify(error, null, 2));
    }
  };


  return (
    <Container>
      <Head title='Status' />

      <Inner>

        <PopUpadm/>
        <HtmlB/><PopUpD/>

        <Title>Painel de Admin</Title>

        <SubTitle>Consultas SQL e Resultados</SubTitle>

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
          <Table><th>{consoleOutput}</th></Table>
        </div>

        <br />
        <a href='/'>Voltar para a página inicial</a>
      </Inner>
    </Container>
  );
}
