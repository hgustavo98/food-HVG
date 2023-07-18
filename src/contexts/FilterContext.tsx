import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextProps {
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: string | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
  filter: string | null; // Adicione a propriedade filter
  setFilter: React.Dispatch<React.SetStateAction<string | null>>; // Adicione a propriedade setFilter
}

export const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}

export function FilterProvider({ children }: { children: ReactNode }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null); // Inicialize o estado do filtro

  return (
    <FilterContext.Provider
      value={{
        showOptions,
        setShowOptions,
        selectedOption,
        setSelectedOption,
        filter, // Adicione o filtro ao contexto
        setFilter, // Adicione a função setFilter ao contexto
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
