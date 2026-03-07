import { Route,Routes } from 'react-router-dom'
import ThemeToggle from './component/ThemeToggle'
import { Home } from './component/Home'
import { PortfolioPage } from './component/PortfolioPage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/portfolio' element={<PortfolioPage/>}/>
      </Routes>    
    </>    
  )
}

export default App
