import axios from 'axios';

export const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await axios.get('http://localhost:5000/user');
    const users = response.data;

    const user = users.find((user: any) => user.email === email && user.password === password);
    console.log('usuario encontrado')
    return !!user; // retorna true se o usuário for encontrado, caso contrário, false
  } catch (error) {
    console.error('Erro ao buscar usuários', error);
    return false;
  }
}
