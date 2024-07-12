import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Landing } from './pages/Landing'

function App() {
 

  return (
   <div>
   <div style={{background: 'green'}}>
    Hi there me Topbaar
   </div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
