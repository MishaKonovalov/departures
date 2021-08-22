import { takeEvery, call, put } from 'redux-saga/effects'
import { setTickets } from '../store/reducer'

const fetchTickets = async () => {
  const date = new Date()
  const year = date.getFullYear()

  let month = date.getMonth() + 1

  month = month.toString().length === 1 ? '0' + month : month

  const data = await fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/${year}-${month}?inboundpartialdate=2019-12-01`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'f3ba3fef05msh89e5cfaa41ea658p1c66c6jsn7b3f5efa7303',
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    }
  )
    .then((res) => res.json())
    .catch((er) => er)
  return data.Quotes
}

function* fetchTicketsWorker() {
  const data = yield call(fetchTickets)
  yield put(setTickets(data))
}

export function* fetchTicketsWatcher() {
  yield takeEvery('FETCH_TICKETS', fetchTicketsWorker)
}
