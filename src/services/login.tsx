import { api } from "../api"
import toast from 'react-hot-toast';


export const login = async (email: string, password:string): Promise<void> => {
  const data:any = await api

  if(email !== data.email || password !== data.password){
    toast.error('Email e/ou senha inválidos')
    return 
  }

  toast.success(`Bem vindo ${email}! Senha: ${password}`)  
}