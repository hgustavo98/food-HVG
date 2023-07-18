import axios from 'axios'
import { CustomerData } from '../interfaces/CustomerData'
import { Snack } from '../interfaces/Snack'
import { SnackData } from '../interfaces/SnackData'
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})



export const getBurgers = (filter: string | null) => api.get<SnackData[]>(`/snacks/${filter}?snack=burger`);
export const getPizzas = (filter: string | null) => api.get<SnackData[]>(`/snacks/${filter}?snack=pizza`);
export const getDrinks = (filter: string | null) => api.get<SnackData[]>(`/snacks/${filter}?snack=drink`);
export const getIceCreams = (filter: string | null) => api.get<SnackData[]>(`/snacks/${filter}?snack=ice-cream`);




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
  })

export default api
