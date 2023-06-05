import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import People from '../../assets/users.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import ContainerItens from "../../components/ContainerItens"
import H1 from "../../components/Title"
import Button from "../../components/Button"
import axios from 'axios'
import { Container, Image, User } from "./styles"

const App = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()
  const baseUrl = "https://register-users-rosy.vercel.app"

  useEffect( () => {
    async function fetchUser() {
    const {data: userRetrieve} = await axios.get(`${baseUrl}/user`)

    setUsers(userRetrieve) 
    }

    fetchUser()
    
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`${baseUrl}/user/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  function toBack() {
  history.push("/")
  }

  return (
    <Container>
      <Image src={People}></Image>

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={toBack} >Voltar<img src={Arrow} alt="arrow" /></Button>

      </ContainerItens>
    </Container>
  )
}

export default App