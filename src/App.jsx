
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Conta from './pages/Conta'
import ContaInfo from './pages/ContaInfo'
import { createContext } from 'react'
import PropTypes from 'prop-types';


export const AppContext = createContext({ user: '' })

const AppContextProvider = ({ children }) => {
  const user = 'marce';

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

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
