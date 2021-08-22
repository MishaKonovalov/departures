import React from 'react';
import { useSelector } from 'react-redux';
import TicketItem from '../TicketItem/TicketItem';
import './ticket-list.css'

function TicketsList(props) {

  const tickets = useSelector((state) => state.tickets)
  const favoritesTicketsPage = useSelector((state) => state.favoritesTicketsPage)
  const content = favoritesTicketsPage ? tickets.filter(el => el.favorite) : tickets

  return (
    <ul className='ticket-list'>
      {content?.map((ticket, i) =>
        <TicketItem ticket={ticket} key={ticket.QuoteId} />
      )}
    </ul>
  );
}

export default TicketsList;