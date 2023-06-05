import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import People from '../../assets/Consulting_Isometric 1.svg'
import Arrow from '../../assets/arrow.svg'

import Button from "../../components/Button"
import ContainerItens from "../../components/ContainerItens"
import H1 from "../../components/Title/index"
import axios from 'axios'
import { Container, Image, Label, Input } from "./styles"

const Users = () => {

  const [users, setUsers] = useState([])
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  const baseUrl = "https://register-users-rosy.vercel.app"

  async function addNewUser() {
     const { data: newUser } = await axios.post(`${baseUrl}/user`, {
      name: inputName.current.value,
      age: inputAge.current.value

    })

    setUsers([...users, newUser]) 

    history.push("/usuarios")
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

        
      </ContainerItens>
    </Container>
  )
}

export default Users