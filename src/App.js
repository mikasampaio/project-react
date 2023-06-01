import React, { useState, useRef } from "react"
import People from './assets/Consulting_Isometric 1.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import axios from 'axios'
import { Container, Image, ContainerItens, H1, Label, Input, Button, User } from "./styles"

const App = () => {

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
  /*   const { data: newUser } = await axios.post("http://localhost:3001/user", {
      name: inputName.current.value,
      age: inputAge.current.value

    })

    setUsers([...users, newUser]) */

    const {data: userRetrieve} = await axios.get("http://localhost:3001/user")

    setUsers(userRetrieve) 
  }

  function deleteUser(userId) {
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  return (
    <Container>
      <Image src={People}></Image>

      <ContainerItens>
        <H1>Olá!</H1>
        <Label>Nome</Label>
        <Input ref={inputName} placeholder="Nome"></Input>

        <Label>Idade</Label>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar <img src={Arrow} alt="arrow" /></Button>

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
      </ContainerItens>
    </Container>
  )
}

export default App