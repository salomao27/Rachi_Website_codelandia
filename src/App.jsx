import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Cadastro from './components/Cadastro'
import Funcionamento from './components/Funcionamento'
import Aplicativo from './components/Aplicativo'
import Planos from './components/Planos'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <Header/>
      <Cadastro/>
      <Funcionamento/>
      <Aplicativo/>
      <Planos/>
      <Footer/>
    </>
  )
}

export default App
