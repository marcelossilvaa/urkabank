// Card.tsx
import React from "react";
import { Box, Center, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import { DButton } from "./DButton";
import { useState } from 'react'
import { Toaster } from 'react-hot-toast';

const Card = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Box className='bg-[#FFFF] rounded-3xl p-4 w-[600px]'>
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
    </Box>
  );
};

export default Card;
