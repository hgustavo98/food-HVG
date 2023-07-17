// Filter.js
import React from 'react';
import { Container, Button, Option } from './styles';
import { useFilter } from '../../contexts/FilterContext';

export function Filter() {
  const { showOptions, setShowOptions, selectedOption, setSelectedOption } = useFilter();

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Desmarcar o botão se ele já estiver selecionado
    } else {
      setSelectedOption(option);
    }
  };

  const handleApplyFilter = () => {
    setShowOptions(false);
    // Você pode fazer alguma ação aqui com a opção selecionada, se necessário
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>
        <span>Ordenar</span>
        {showOptions ? <span>&#9650;</span> : <span>&#9660;</span>}
      </Button>
      {showOptions && (
        <>
          <Option
            onClick={() => handleOptionClick('maior')}
            className={selectedOption === 'maior' ? 'selected' : ''}
          >
            <span>Maior valor</span>
            {selectedOption === 'maior' && <span>&#10003;</span>}
          </Option>
          <Option
            onClick={() => handleOptionClick('menor')}
            className={selectedOption === 'menor' ? 'selected' : ''}
          >
            <span>Menor valor</span>
            {selectedOption === 'menor' && <span>&#10003;</span>}
          </Option>
          <Button onClick={handleApplyFilter}><span>Aplicar</span></Button>
        </>
      )}
    </Container>
  );
}
