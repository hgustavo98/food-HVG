// Filter.js
import React, { useContext, useState } from 'react';
import { Container, Button, Option } from './styles';
import { SnackContext } from '../../contexts/SnackContext';

export function Filter() {
  const snackContext = useContext(SnackContext);
  const { selectedOption, setSelectedOption } = snackContext;

  const [showOptions, setShowOptions] = useState(false); // Adicione essa linha


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

  console.log(selectedOption);

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
          <Button onClick={handleApplyFilter}><span>X</span></Button>
        </>
      )}
    </Container>
  );
}
