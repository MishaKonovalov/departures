import { Route } from 'react-router-dom'
import React from 'react'
import Flights from './pages/Flights'
import TicketPage from './pages/TicketPage/TicketPage'

const routes = [
  { path: '/', component: Flights, exact: true },
  { path: '/:QuoteId', component: TicketPage, exact: false },
]

export function Router(props) {
  return routes.map(({ path, component, exact }, i) => {
    return (
      <Route path={path} component={component} key={path + i} exact={exact} />
    )
  })
}
