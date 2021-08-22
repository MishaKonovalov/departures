const initialState = {
  tickets: [],
  ticket: {},
  favoritesTicketsPage: false,
  dateForTicketPage: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      const newTicketsArray = action.payload.map((el) => ({
        ...el,
        favorite: false,
      }))
      return {
        ...state,
        tickets: newTicketsArray,
      }
    case 'TOGGLE_FAVORITES':
      const index = state.tickets.findIndex(
        (el) => el.QuoteId === action.QuoteId
      )

      const oldTicket = state.tickets[index]
      const newTicket = {
        ...oldTicket,
        favorite: oldTicket.favorite ? false : true,
      }

      const newTickets = [
        ...state.tickets.slice(0, index),
        newTicket,
        ...state.tickets.slice(index + 1),
      ]

      if (Object.keys(state.ticket).length !== 0) {
        return {
          ...state,
          tickets: newTickets,
          ticket: newTicket,
        }
      }

      return {
        ...state,
        tickets: newTickets,
      }

    case 'TO_FAVORITES':
      return {
        ...state,
        favoritesTicketsPage: true,
      }
    case 'TO_TICKETS':
      return {
        ...state,
        favoritesTicketsPage: false,
      }
    case 'GET_TICKET':
      const inx = state.tickets.findIndex(
        (el) => el.QuoteId === Number(action.payload)
      )
      const el = state.tickets[inx]
      return {
        ...state,
        ticket: el,
      }
    case 'SET_DATE':
      const date = new Date(state.ticket.OutboundLeg.DepartureDate)
        .toString()
        .split(' ')
        .splice(0, 5)
      return {
        ...state,
        dateForTicketPage: date,
      }
    default:
      return state
  }
}

export const setTickets = (payload) => ({ type: 'SET_TICKETS', payload })
export const getTicket = (payload) => ({ type: 'GET_TICKET', payload })
export const fetchTickets = (payload) => ({ type: 'FETCH_TICKETS', payload })
export const setDate = () => ({ type: 'SET_DATE' })
export const toFavorites = () => ({ type: 'TO_FAVORITES' })
export const toTickets = () => ({ type: 'TO_TICKETS' })
export const toggleFavorites = (QuoteId) => ({
  type: 'TOGGLE_FAVORITES',
  QuoteId,
})
