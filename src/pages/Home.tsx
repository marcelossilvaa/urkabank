import {Box, Center, Input} from '@chakra-ui/react'
import Card from '../components/Card'
import React, { useState } from 'react'
import { login } from "../services/login";
import { DButton } from "../components/DButton";
import { Toaster } from 'react-hot-toast';

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            <Input placeholder='password' type="password" value={password} onChange={(event) => {
              setPassword(event.target.value)
              }}>
            </Input>
            <Center>
              <DButton onClick={() => login(email, password)} />
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