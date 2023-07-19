/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { CustomerData } from '../interfaces/CustomerData';
import { Snack } from '../interfaces/Snack';
import { SnackData } from '../interfaces/SnackData';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getBurgers = (filter: string | null) =>
  api.get<SnackData[]>(`/snacks/${filter}?snack=burger`);

export const getPizzas = (filter: string | null) =>
  api.get<SnackData[]>(`/snacks/${filter}?snack=pizza`);

export const getDrinks = (filter: string | null) =>
  api.get<SnackData[]>(`/snacks/${filter}?snack=drink`);

export const getIceCreams = (filter: string | null) =>
  api.get<SnackData[]>(`/snacks/${filter}?snack=ice-cream`);

// Novas requisições:

// Rota para obter os nomes dos lanches (snackName) e os nomes dos clientes (customerName) para os itens de pedidos pagos
export const getPaidOrders = () => api.get<any>('/paid-orders');

// Rota para obter todos os pedidos de um cliente específico (orderId, status, total, snackName, snackPrice).
export const getCustomerOrders = (customerId: number) => api.get<any>(`/customer-orders/${customerId}`);

// Rota para obter os itens de pedido por orderId
export const getOrderItems = (orderId: number) => api.get<any>(`/order-items/${orderId}`);

// Rota para obter os pedidos com itens com quantidade maior que 2 e inclui informações do cliente e dos lanches (customerName, totalSpent, snackName, snackPrice).
export const getOrdersWithItemsQuantityGreaterThan2 = () => api.get<any>('/orders-with-items-quantity-greater-than-2');

// Rota para obter o valor total gasto por cada cliente e inclui informações sobre os itens de pedidos e os lanches.
export const getCustomersTotalSpent = () => api.get<any>('/customers-total-spent');

// Rota para obter o valor total gasto por um cliente específico (customerTotalSpent).
export const getCustomerTotalSpent = (customerId: number) => api.get<any>(`/customer-total-spent/${customerId}`);

// Rota para obter o número total de itens em pedidos de um cliente (customerTotalItems).
export const getCustomerTotalItems = (customerId: number) => api.get<any>(`/customer-total-items/${customerId}`);

export const processCheckout = (cart: Snack[], customer: CustomerData) =>
  api.post('/checkout', {
    cart,
    customer: {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      document: customer.document,
      zipCode: customer.zipCode,
      street: customer.street,
      number: customer.number,
      complement: customer.complement,
      neighborhood: customer.neighborhood,
      city: customer.city,
      state: customer.state,
    },
    payment: {
      creditCardNumber: customer.creditCardNumber,
      creditCardHolder: customer.creditCardHolder,
      creditCardExpiration: `${new Date(customer.creditCardExpiration).getMonth() + 1}/${new Date(
        customer.creditCardExpiration,
      ).getFullYear()}`,
      creditCardSecurityCode: customer.creditCardSecurityCode,
    },
  });

export default api;
