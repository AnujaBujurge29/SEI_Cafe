import React from 'react'
import SignUpForm from '../../Components/SignUpForms/SignUpForm'
import LoginForm from '../../Components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
  return (
    <main>
      <h1>Auth Page</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </main>
  )
}
