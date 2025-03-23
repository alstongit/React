import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1 className='text-red-500 text-center'>hello alston</h1>
    <Login></Login>
    <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
