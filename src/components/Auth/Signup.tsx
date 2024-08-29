import React from 'react'
import {useKeycloak} from '@react-keycloak/web'

const Signup: React.FC = () => {
  const {keycloak} = useKeycloak()

  const signup = () => {
    keycloak.register()
  }

  return (
    <div>
      <h1>Signup</h1>
      <button onClick={signup}>Signup with Keycloak</button>
    </div>
  )
}

export default Signup
