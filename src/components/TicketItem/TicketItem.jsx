import React from 'react';
import { useDispatch, } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleFavorites } from '../../store/reducer';
import { Arrow, Heart, Plain } from '../../UI/Icons';
import './ticket-item.css'


function TicketItem({ ticket }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const date = new Date(ticket.OutboundLeg.DepartureDate)
    .toString()
    .split(' ')
    .splice(0, 5)

  const onClickHandler = (e, QuoteId) => {
    if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
      history.push(`/${QuoteId}`)
    }
  }

  const color = ticket.favorite ? 'red' : 'ghost'
  return (
    <li className='card' onClick={(e) => onClickHandler(e, ticket.QuoteId)}>
      <span onClick={() => dispatch(toggleFavorites(ticket.QuoteId))}>
        <Heart color={color} />
      </span>
      <Plain />
      <div className="card__section">
        <div className='card__info'>
          <h2>Moscow</h2>
          <Arrow />
          <h2>New York</h2>
        </div>
        <div className="card__date">
          <span>SVO - {date[2]} {date[1]}, {date[3]} - {date[4].slice(0, 5)} </span>
          <span>Aeroflot</span>
        </div>
        <div className="price">
          <p>Price:</p><h1>{ticket.MinPrice} ₽</h1>
        </div>

      </div>
    </li>
  );
}

export default TicketItem;