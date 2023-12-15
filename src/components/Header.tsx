import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";


export default function Header(){

  const context = useContext(AppContext)
  console.log('retorno header', context)

  return(
      <header className="bg-orange-500 flex justify-center ">
        <Link to={'/'}>
          <div className="text-6xl">
            Dio Bank
          </div>
        </Link>
      </header>
  )
}