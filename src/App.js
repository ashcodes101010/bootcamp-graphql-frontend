import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import AuthorPage from './containers/AuthorPage'
import AddAuthor from './containers/AddAuthor'
import Nav from './components/Nav'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/author/:id" component={AuthorPage} />
            <Route path="/AddAuthor" component={AddAuthor} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
