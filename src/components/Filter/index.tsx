import React, { useState } from 'react';
import { Container, Button, Option } from './styles';

export function Filter() {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <Container>
      <Button onClick={handleButtonClick}>
        <span>Ordernar</span>
        {showOptions ? <span>&#9650;</span> : <span>&#9660;</span>}
      </Button>
      {showOptions && (
        <>
          <Option>
            <span>Maior valor</span>
          </Option>
          <Option>
            <span>Menor valor</span>
          </Option>
        </>
      )}
    </Container>
  );
}
