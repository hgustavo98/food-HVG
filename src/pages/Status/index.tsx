

import { Head } from '../../components/Head'

import { Container, Inner, SubTitle, Title } from './styled'

export default function StatusPage() {

  return (
    <Container>
      <Head title='Status' />

      <Inner>
        <Title>teste</Title>

        <p>
          teste <code></code>
        </p>

        <SubTitle>teste</SubTitle>


        <br />
        <a href='/'>Voltar para a página inicial</a>
      </Inner>
    </Container>
  )
}
