import { Box, Center, Spinner } from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import CardInfo from "../components/CardInfo"
import { api } from "../api"
import { AppContext } from "../components/AppContext";
import toast, { Toaster } from "react-hot-toast"

interface UserData{
  email: string
  password: string
  name: string
  balance: number
  id: string
}

const Conta = () => {

  const [ userData, setUserData ] = useState<null | UserData>()
  const {id} = useParams()
  const navigate = useNavigate() 

  const { isLoggedIn } = useContext(AppContext)

  !isLoggedIn && navigate('/')

  if(!isLoggedIn){
    toast.error("Não foi possível logar")
  }
  
  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    
    getData()
  })
  
  const actualData = new Date();
  const formattedTime = actualData.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = `${actualData.toLocaleDateString()} ${formattedTime}`;
  

  if(userData && id !== userData.id){
    navigate('/')
  }

  return(
    <Center>
      <Box className="flex gap-4 my-10">
        {
          userData === undefined || userData === null ? 
          (
            <Center className="flex jus items-center">
              <Spinner className="text-3xl"/>
            </Center>
          ) : 
          (
            <>
              <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={formattedDate} />
              <CardInfo mainContent={`Saldo`} content={`R$ ${userData.balance},00`}/>
            </>
            
          )
        }
      </Box>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Center>
    
  )
}

export default Conta