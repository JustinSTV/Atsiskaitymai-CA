import { Route, Routes } from 'react-router-dom'
import BaseOutlet from './components/outlet/BaseOutlet'
import HomePage from './components/pages/HomePage'
import AllBooks from './components/pages/AllBooks'

const App = () => {

  return (
    <Routes>
      <Route path='' element={<BaseOutlet />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<AllBooks />} />
        {/* <Route path="/books/:id" element={BookDetails} /> */}
      </Route>
    </Routes>
  )
}

export default App
