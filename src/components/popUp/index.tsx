import { useState } from 'react'
import { Container, PopupContent, CloseButton } from './styles'

export function PopUp() {
  const [showPopup, setShowPopup] = useState(false)

  const handleOpenPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <Container onClick={handleOpenPopup}>
        <span>📡</span>
      </Container>
      {showPopup && (
        <PopupContent>
          <h2>Comandos utilizados na Página </h2>
          <h3>GET /snacks: </h3>
          <p> SELECT * FROM Snack WHERE snack = valor_de_snack ;</p>
          <h3>GET /snacks/maior: </h3>
          <p>SELECT * FROM Snack WHERE snack = valor_de_snack ORDER BY price DESC;</p>
          <h3>GET /snacks/menor: </h3>
          <p> SELECT * FROM Snack WHERE snack = valor_de_snack ORDER BY price ASC;</p>
          <CloseButton onClick={handleClosePopup}>Fechar</CloseButton>
        </PopupContent>
      )}
    </>
  )
}
