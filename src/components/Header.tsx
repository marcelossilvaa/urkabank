import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";


export default function Header(){

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)
    navigate('/')
  }
  return(
      <header className="bg-orange-500 flex justify-between items-center px-4 py-1">
        <div>
          <Link to={'/'}>
            <div className="text-4xl">
              _UrkaBank
            </div>
          </Link>
        </div>
          {
            isLoggedIn && (
            <div>
              <button onClick={() => logout()}>
                Sair
              </button>
            </div>
            )
          }
      </header>
  )
}