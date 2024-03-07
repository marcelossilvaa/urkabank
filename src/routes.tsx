import React, { useContext } from "react"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext)

  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home />}/>
      <Route path='/containfo' element={<ContaInfo />}/>
    </Routes>
  )
}

export default MainRoutes