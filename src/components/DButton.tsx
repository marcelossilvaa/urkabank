import { Button } from "@chakra-ui/react"
import React, { MouseEventHandler } from "react"

interface IDButton{
  onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
  return(
    <Button
      onClick={onClick}
      className='bg-teal-500 w-full'
    >
      Entrar
    </Button>
  )
}