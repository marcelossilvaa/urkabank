
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import Layout from './components/Layout'
import { AppContextProvider } from './components/AppContext'
import MainRoutes from './routes'
import { createLocalStorage, getAllLocalStorage } from './services/storage'

export default function App() {
  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  )
}
