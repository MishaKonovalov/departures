import './App.css'
import { Router } from './router'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTickets } from './store/reducer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
