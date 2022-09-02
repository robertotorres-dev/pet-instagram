import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Context from './Context'

// APP
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-api-eta.vercel.app/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)
