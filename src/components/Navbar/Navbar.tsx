import React from 'react'
import {Link} from 'react-router-dom'
import {useKeycloak} from '@react-keycloak/web'

const Navbar: React.FC = () => {
  const {keycloak} = useKeycloak()

  const logout = () => {
    keycloak.logout()
  }

  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/whiteboard'>Whiteboard</Link>
      {keycloak.authenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </nav>
  )
}

export default Navbar
