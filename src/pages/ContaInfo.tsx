import React from "react"
import { Link } from "react-router-dom"

const ContaInfo = () => {
  return(
    <>
      <h1>Informações da conta</h1>
      <Link to='/conta/1'>
        <h2 className="text-xl">Conta</h2>
      </Link>
    </>
    
  )
}

export default ContaInfo