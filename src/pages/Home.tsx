import {Box, Center, Input} from '@chakra-ui/react'
import Card from '../components/Card'
import React, { useContext, useState } from 'react'
import { login } from "../services/login";
import { DButton } from "../components/DButton";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage'

const Home = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return toast.error("Email ou senha inválidos");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate('/conta/1');
  }

  return(
    <Box className='p-6 flex items-center justify-center flex-col gap-4'>
      <Card className='flex flex-col gap-4'>
        <Center className="flex gap-2">
          <h1>Faça o login</h1>
        </Center>
        <Input 
          placeholder='email' 
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
        />
        <Input 
          placeholder='password' 
          type="password" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)} 
        />
        <Center>
          <DButton onClick={() => validateUser(email, password)} />
        </Center>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </Card>
    </Box>
  )
}

export default Home;
