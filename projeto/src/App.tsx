import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      <h1>Github Finder</h1>
      <Outlet />
    </div>
  )
}

export default App
