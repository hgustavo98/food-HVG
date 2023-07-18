import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/MyOrder'
import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'
import { FilterProvider } from '../../contexts/FilterContext'
import logoImg from '../../assets/logo.svg'
import { Filter } from '../../components/Filter'
import { SnackProvider } from '../../contexts/SnackContext'
import { Mystatus } from '../../components/Status'

export default function Main() {
  // Função para lidar com a mudança de opção


  return (
    <FilterProvider>
      <SnackProvider>
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />  <Mystatus/>

        <Filter/>

        <Outlet />

      </section>
      <MyOrder />
    </Container>

    </SnackProvider>
    </FilterProvider>
  )
}
