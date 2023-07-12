import { Outlet } from 'react-router-dom'

import { MyOrder } from '../../components/MyOrder'
import { Sidebar } from '../../components/Sidebar'
import {Filter} from '../../components/Filter'
import { Container } from './styles'

import logoImg from '../../assets/logo.svg'

export default function Main() {
  return (
    <Container>

      <Sidebar />

      <section>

        <img src={logoImg} />
        <Filter />
        <Outlet />

      </section>
      <MyOrder />
    </Container>
  )
}
