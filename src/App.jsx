
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Conta from './pages/Conta'
import ContaInfo from './pages/ContaInfo'
import { AppContextProvider } from './components/AppContext'


export default function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/conta/:id' element={<Conta />}/>
              <Route path='/containfo' element={<ContaInfo />}/>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}
