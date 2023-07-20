import { useState } from 'react'
import { Container, PopupContent, CloseButton } from './styles'

export function PopUpadm() {
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

          <h1>Comandos Utilizados na Página</h1>
                    <h3>GET /paid-orders</h3>
  <p>
    SELECT s.name AS snackName, c.fullName AS customerName
    FROM OrderItem AS oi
    JOIN &quot;Order&quot; AS o ON oi.orderId = o.id
    JOIN Snack AS s ON oi.snackId = s.id
    JOIN Customer AS c ON o.customerId = c.id
    WHERE o.status = &quot;PAID&quot;;
  </p>

  <h3>GET /customer-orders/:customerId</h3>
  <p>
    SELECT o.id AS orderId, o.status, o.total, s.name AS snackName, s.price AS snackPrice
    FROM &quot;Order&quot; AS o
    JOIN Customer AS c ON o.customerId = c.id
    JOIN OrderItem AS oi ON o.id = oi.orderId
    JOIN Snack AS s ON oi.snackId = s.id
    WHERE c.id = &lt;customerId&gt;;
  </p>

  <h3>GET /orders-with-items-quantity-greater-than-2</h3>
  <p>
    SELECT c.fullName AS customerName, SUM(o.total) AS totalSpent, oi.quantity, s.name AS snackName, s.price AS snackPrice
    FROM Customer AS c
    JOIN &quot;Order&quot; AS o ON c.id = o.customerId
    JOIN OrderItem AS oi ON o.id = oi.orderId
    JOIN Snack AS s ON oi.snackId = s.id
    GROUP BY c.fullName, oi.quantity, s.name, s.price
    HAVING oi.quantity &gt; 2;
  </p>

  <h3>GET /customers-total-spent</h3>
  <p>
    SELECT c.fullName AS customerName, SUM(o.total) AS totalSpent, s.name AS snackName, s.price AS snackPrice
    FROM Customer AS c
    JOIN &quot;Order&quot; AS o ON c.id = o.customerId
    JOIN OrderItem AS oi ON o.id = oi.orderId
    JOIN Snack AS s ON oi.snackId = s.id
    GROUP BY c.fullName, s.name, s.price;
  </p>

  <h3>GET /customer-total-spent/:customerId</h3>
  <p>
    SELECT SUM(o.total) AS customerTotalSpent
    FROM &quot;Order&quot; AS o
    WHERE o.customerId = &lt;customerId&gt;;
  </p>

  <h3>GET /customer-total-items/:customerId</h3>
  <p>
    SELECT SUM(oi.quantity) AS customerTotalItems
    FROM OrderItem AS oi
    JOIN &quot;Order&quot; AS o ON oi.orderId = o.id
    WHERE o.customerId = &lt;customerId&gt;;
  </p>

  <h3>GET /orders/:id</h3>
  <p>
    SELECT * FROM &quot;Order&quot; AS o
    LEFT JOIN &quot;Customer&quot; AS c ON o.&quot;customerId&quot; = c.&quot;id&quot;
    LEFT JOIN &quot;OrderItem&quot; AS oi ON o.&quot;id&quot; = oi.&quot;orderId&quot;
    LEFT JOIN &quot;Snack&quot; AS s ON oi.&quot;snackId&quot; = s.&quot;id&quot;
    WHERE o.&quot;id&quot; = &lt;orderId&gt;;
  </p>



  <h2>Relatórios</h2>
<h3>get/report-monthly-sales </h3>
<p>
SELECT DATE_FORMAT(&quot;createdAt&quot;, &quot;%Y-%m&quot;) AS &quot;month&quot;,
SUM(&quot;total&quot;) AS &quot;totalSales&quot;
FROM &quot;Order&quot;
GROUP BY &quot;month&quot;
ORDER BY &quot;month&quot;;
</p>

<h3>get/report-orders-by-customer </h3>
<p>
SELECT &quot;Customer&quot;.&quot;id&quot;, &quot;Customer&quot;.&quot;fullName&quot;,
&quot;Order&quot;.&quot;id&quot; as &quot;orderId&quot;, &quot;Order&quot;.&quot;total&quot;
FROM &quot;Customer&quot;
LEFT JOIN &quot;Order&quot; ON &quot;Customer&quot;.&quot;id&quot; = &quot;Order&quot;.&quot;customerId&quot;;
</p>

 <h3>get/report-sales-by-snack </h3>
<p>
SELECT &quot;snackId&quot;, SUM(&quot;quantity&quot;) as &quot;quantity&quot;,
 SUM(&quot;subTotal&quot;) as &quot;subTotal&quot;
FROM &quot;OrderItem&quot;
GROUP BY &quot;snackId&quot;;
</p>
          <CloseButton onClick={handleClosePopup}>Fechar</CloseButton>
        </PopupContent>
      )}
    </>
  )
}
