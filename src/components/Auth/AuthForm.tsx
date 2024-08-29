import React from 'react'

interface AuthFormProps {
  title: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

const AuthForm: React.FC<AuthFormProps> = ({title, onSubmit, children}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      {children}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AuthForm
