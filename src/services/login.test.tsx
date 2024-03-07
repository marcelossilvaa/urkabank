import { login } from "./login"

describe('login', () => {

  const mockEmail = 'marce@dio'
  it('Exibir alert boas vindas caso o email válido', async() => {
    const response = await login(mockEmail)
    expect(response).toBeTruthy()
  })

  it('Deve exibir um erro caso email inválido', async() =>{
    const response = await login ('email@invalido.com')
    expect(response).toBeFalsy()
  })
})