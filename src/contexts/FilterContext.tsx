// FilterContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextProps {
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedOption: string | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
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

  return (
    <FilterContext.Provider
      value={{
        showOptions,
        setShowOptions,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
