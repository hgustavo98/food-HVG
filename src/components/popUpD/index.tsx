import React, { useState } from 'react';
import { Container, PopupContent, CloseButton } from './styles';

export function PopUpD() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Container onClick={handleOpenPopup}>
        <span>📉</span>
      </Container>
      {showPopup && (
        <PopupContent>

          {/* Atualize o caminho para a imagem usando o diretório público */}
          <img src="/DER.jpg" alt="Imagem do Popup" />

          <CloseButton onClick={handleClosePopup}>Fechar</CloseButton>
        </PopupContent>
      )}
    </>
  );
}
