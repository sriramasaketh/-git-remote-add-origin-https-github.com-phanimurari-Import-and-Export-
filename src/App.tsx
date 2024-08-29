import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Whiteboard from './pages/Whiteboard'
import NotFound from './pages/NotFound'
import keycloak from './services/keycloak'
import {ReactKeycloakProvider} from '@react-keycloak/web'

const App: React.FC = () => {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/whiteboard' element={<Whiteboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  )
}

export default App
