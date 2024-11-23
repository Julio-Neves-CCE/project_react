import { useEffect } from 'react'
import Trash from '../../src/assets/img/trash.png'
import './style.css'
import api from '../../src/services/api'

function Home() {

  let users = []

  async function getUsers() {
   users = await api.get('/usuarios')
    
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="nome" placeholder='Nome' />
        <input type="number" name="idade" placeholder='Idade' />
        <input type="email" name="email" placeholder='Email' />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="Excluir usuário" />
          </button>

        </div>
      ))}


    </div>




  )
}

export default Home
