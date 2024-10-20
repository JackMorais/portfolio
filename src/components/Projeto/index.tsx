import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, Botao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
      <Botao>Visualizar</Botao>
    </Card>
  )
}

export default Projeto
