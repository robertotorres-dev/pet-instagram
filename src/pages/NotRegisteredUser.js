import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { useMutationRegister } from '../hoc/useMutationRegister'
import { useMutationLogin } from '../hoc/useMutationLogin'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  const { mutation: register, mutationLoading: loadingRegister, mutationError: errorRegister } = useMutationRegister()
  const { mutation: login, mutationLoading: loadingLogin, mutationError: errorLogin } = useMutationLogin()

  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }

    register({ variables })
      .then(({ data }) => {
        const { signup } = data
        activateAuth(signup)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }

    login({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const errorRegisterMessage = errorRegister && `Error: ${errorRegister.message}`
  const errorLoginMessage = errorLogin && `Error: ${errorLogin.message}`
  return (
    <>
      <UserForm disabled={loadingRegister} error={errorRegisterMessage} title='Registrarse' onSubmit={onSubmitRegister} />
      <UserForm disabled={loadingLogin} error={errorLoginMessage} title='Iniciar sesión' onSubmit={onSubmitLogin} />
    </>
  )
}
