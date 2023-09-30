import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import { FilePage, HomePage, AuthPage } from './pages'


function App() {
 
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<FilePage />} path='/file/:id' />
        <Route element={<AuthPage />} path='/auth' />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
