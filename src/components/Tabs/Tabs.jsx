import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toFavorites, toTickets } from '../../store/reducer';
import './tabs.css'

function Tabs(props) {
  const dispatch = useDispatch()
  const favoritesTicketsPage = useSelector((state => state.favoritesTicketsPage))
  const tickets = useSelector((state) => state.tickets)
  const favoriteTickets = tickets.filter(el => el.favorite)

  return (
    <header>
      <div>
        <h2>Flights</h2>
      </div>
      <div className='tabs'>
        <button className={favoritesTicketsPage ? 'tabs_btn active' : 'tabs_btn'} onClick={() => dispatch(toFavorites())}>Favourites <span className='counter'>{favoriteTickets.length}</span></button>
        <button className={favoritesTicketsPage ? 'tabs_btn' : 'tabs_btn active'} onClick={() => dispatch(toTickets())}>Browse <span className='counter'>{tickets.length}</span></button>
      </div>
    </header>

  );
}

export default Tabs;