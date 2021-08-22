import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Сarousel/Сarousel'
import { toggleFavorites, getTicket, setDate } from '../../store/reducer'
import { BigArrow, Heart } from '../../UI/Icons'
import './ticket-page.css'


function TicketPage(props) {
  const dispatch = useDispatch()
  const ticket = useSelector(state => state.ticket)
  const date = useSelector(state => state.dateForTicketPage)

  useEffect(() => {
    dispatch(getTicket(props.match.params.QuoteId))
    dispatch(setDate())
  }, [ticket, props.match.params.QuoteId, dispatch])

  const checkDate = date.length === 0 ? '____' : `${date[2]} ${date[1]}, ${date[3]} `
  const boarding = date.length === 0 ? '____' : `${date[4].slice(0, 5)}`
  const color = ticket.favorite ? 'red' : 'ghost'

  return (
    <div className='ticket-page'>
      <div className='ticket'>
        <span onClick={() => dispatch(toggleFavorites(ticket.QuoteId))} >
          <Heart color={color} />
        </span>

        <div className="ticket_container">
          <div>
            <span>{checkDate}</span>
            <h1 className='ticket-title'>SVO</h1>
            <span>Moscow</span>
          </div>
          <BigArrow />
          <div>
            <span>{checkDate}</span>
            <h1 className='ticket-title'>JFK</h1>
            <span>Nye</span>
          </div>
        </div>
        <div className="info">
          <div className="info-item">
            <h2>Price</h2>
            <h1>{ticket.MinPrice}  ₽</h1>
          </div>
          <div className="info-item">
            <h2>Boarding</h2>
            <h1>{boarding}</h1>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default TicketPage;