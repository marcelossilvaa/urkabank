import { login } from "./login"
import { api } from "../api"

describe('login', () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert
  const mockEmail = 'marce@dio'


  it('Exibir alert boas vindas caso o email válido', async() => {
    await login(mockEmail)
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`)
  })

  it('Não exibir a mensagem de boas vindas sem o email', async() => {
    await login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
  })

  it('Deve exibir erro caso email inválido', async() =>{
    await login('email@invalido.com')
    expect(mockAlert).toHaveBeenCalledWith('Email inválido')
  })
})