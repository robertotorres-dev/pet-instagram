import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useMutationRegister } from '../hoc/useMutationRegister'
import { useMutationLogin } from '../hoc/useMutationLogin'

export const NotRegisteredUser = () => {
  const { mutation: register, mutationData: dataRegister, mutationLoading: loadingRegister, mutationError: errorRegister } = useMutationRegister()
  const { mutation: login, mutationData: dataLogin, mutationLoading: loadingLogin, mutationError: errorLogin } = useMutationLogin()
  console.log(register, dataRegister, loadingRegister, errorRegister)
  console.log(login, dataLogin, loadingLogin, errorLogin)

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmitRegister = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }

            register({ variables })
              .then(res => {
                console.log(res)
                activateAuth()
              })
              .catch(error => {
                console.error(error)
              })
          }

          const onSubmitLogin = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }

            login({ variables })
              .then(res => {
                console.log(res)
                activateAuth()
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
      }
    </Context.Consumer>
  )
}
