import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import { FilePage, HomePage, AuthPage, SingleFilePage } from './pages'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<FilePage />} path='/new_file/:id' />
        <Route element={<SingleFilePage />} path='/file_detail/:id' />
        <Route element={<AuthPage />} path='/auth' />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
