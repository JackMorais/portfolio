import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={17}>JacksonMorais</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        JackMorais
      </Paragrafo>
      <Descricao fontSize={12}>Engenheiro Front-End</Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
