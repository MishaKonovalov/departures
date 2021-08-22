import React from 'react'
import Tabs from '../components/Tabs/Tabs'
import TicketsList from '../components/TicketsList/TicketsList'

function Flights(props) {
  return (
    <section>
      <div>
        <Tabs />
        <TicketsList />
      </div>
    </section>
  )
}

export default Flights
