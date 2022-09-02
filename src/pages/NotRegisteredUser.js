import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useMutationRegister } from '../hoc/useMutationRegister'

export const NotRegisteredUser = () => {
  const { mutation, mutationData, mutationLoading, mutationError } = useMutationRegister()
  console.log(mutation, mutationData, mutationLoading, mutationError)

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }

            mutation({ variables })
              .then(activateAuth)
          }

          const errorMessage = mutationError && 'El usuario ya existe o hay algún prlblema'
          return (
            <>
              <UserForm disabled={mutationLoading} error={errorMessage} title='Registrarse' onSubmit={onSubmit} />
              <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
