
import { Outlet } from 'react-router-dom'
import './App.css'
import HomePage from './Components/Home/HomePage'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
