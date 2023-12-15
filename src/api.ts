const conta = {
  email: 'marce@dio',
  password: '123456',
  name: 'Marcelo',
  balance: 2000.00,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1500)
})

