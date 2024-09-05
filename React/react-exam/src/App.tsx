import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainOutlet from './components/outlet/MainOutlet'
import Home from './components/pages/Home'

const App = () => {

  return (
    <Routes>
      <Route path='' element={<MainOutlet />}>
        <Route index element={<Home />}>
          
        </Route>
      </Route>
    </Routes>
  )
}

export default App
