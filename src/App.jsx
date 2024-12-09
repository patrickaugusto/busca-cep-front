import { useState } from 'react'
import './App.css'
import CepForm from './components/form/CepForm'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CepForm />
      <Footer />
    </>
  )
}

export default App
