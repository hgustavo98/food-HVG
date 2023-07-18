import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { SnackData } from '../interfaces/SnackData';
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api';

interface SnackContextProps {
  burgers: SnackData[];
  pizzas: SnackData[];
  drinks: SnackData[];
  iceCreams: SnackData[];
  selectedOption: string | null;
  setSelectedOption: (option: string | null) => void; // Função para atualizar o selectedOption
}


interface SnackProviderProps {
  children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([]);
  const [pizzas, setPizzas] = useState<SnackData[]>([]);
  const [drinks, setDrinks] = useState<SnackData[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackData[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  console.log(selectedOption);

  // Convertendo selectedOption para uma string vazia quando for null
  const normalizedSelectedOption = selectedOption !== null ? selectedOption : '';

  useEffect(() => {
    (async () => {
      try {
        const burgerRequest = await getBurgers(normalizedSelectedOption);
        const pizzaRequest = await getPizzas(normalizedSelectedOption);
        const drinkRequest = await getDrinks(normalizedSelectedOption);
        const iceCreamRequest = await getIceCreams(normalizedSelectedOption);

        const requests = [burgerRequest, pizzaRequest, drinkRequest, iceCreamRequest];

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: drinkResponse },
          { data: iceCreamResponse },
        ] = await Promise.all(requests);

        setBurgers(burgerResponse);
        setPizzas(pizzaResponse);
        setDrinks(drinkResponse);
        setIceCreams(iceCreamResponse);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [normalizedSelectedOption]); // Adicionando normalizedSelectedOption como dependência do useEffect

  return (
    <SnackContext.Provider  value={{ burgers, pizzas, drinks, iceCreams, selectedOption: normalizedSelectedOption, setSelectedOption }}>
      {children}
    </SnackContext.Provider>
  );
}
