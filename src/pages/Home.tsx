import {Box, Center, Input} from '@chakra-ui/react'
import Card from '../components/Card'
import React, { MouseEventHandler, useContext, useState } from 'react'
import { login } from "../services/login";
import { DButton } from "../components/DButton";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';

const Home = () => {
  const [email, setEmail] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email: string) => {
    const loggedIn = await login(email)

    if(!loggedIn){
      toast.error("Email inválido")
    } else {
      setIsLoggedIn(true)
      navigate('/conta/1')
    }

    
  }
  
  return(
        <Box className='p-6 flex items-center justify-center'>
          <Card >
            <Center className="flex gap-2">
              <h1>Faça o login</h1>
              
            </Center>
            <Input placeholder='email' value={email} onChange={(event) => {
              setEmail(event.target.value)
              }}>
            </Input>
            <Input placeholder='password' type="password">
            </Input>
            <Center>
              <DButton onClick={() => validateUser(email)} />
            </Center>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
          </Card>
        </Box>
  )
}

export default Home