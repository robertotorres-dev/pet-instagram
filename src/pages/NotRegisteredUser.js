import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useMutationRegister } from '../hoc/useMutationRegister'

export const NotRegisteredUser = () => {
  const { mutation, mutationLoading, mutationError } = useMutationRegister()
  console.log(mutation, mutationLoading, mutationError)

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
          return (
            <>
              <UserForm title='Registrarse' onSubmit={onSubmit} />
              <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
