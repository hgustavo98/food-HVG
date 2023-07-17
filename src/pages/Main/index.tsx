import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/MyOrder'
import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import { Filter } from '../../components/Filter'

export default function Main() {
  // Função para lidar com a mudança de opção
  const handleOptionChange = (option: string | null): void => {
    // Fazer o que for necessário com a opção selecionada aqui
    console.log('Opção selecionada:', option);
    // Ou fazer outras operações ou atualizações de estado, se necessário
  };

  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />

        <Filter onOptionChange={handleOptionChange} />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
