import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const clientes = [
    new Cliente('Amelia', 34, '1'),
    new Cliente('Joaquina', 44, '1'),
    new Cliente('Amanda', 45, '1'),
    new Cliente('Berenice', 24, '1'),
  ]
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>    
    </div>
  )
}
