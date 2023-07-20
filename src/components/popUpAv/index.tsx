import React from 'react';
import { Container } from './styles';

export function HtmlB() {


  const handleOpenPopup = () => {
    // Caminho relativo para o arquivo "av.html" na pasta pública
    const urlDaPagina = '/av.html';

    // Abrir o HTML em uma nova guia
    window.open(urlDaPagina, '_blank');
  };

  return (
    <>
      <Container onClick={handleOpenPopup}>
        <span>📄</span>
      </Container>
    </>
  );
}
