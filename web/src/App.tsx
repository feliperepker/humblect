import './App.css'
import './styles/main.css'
import { Header } from './components/Header'
import { AppRoutes } from './routes/routes'
import { isAuthenticated } from './services/auth'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className='bg-gray-50'>
      {isAuthenticated() ? <Header/> : ''}
      <div className={`${isAuthenticated() ? 'h-16' : ''}`}></div>
      <AppRoutes/>
      {isAuthenticated() ? <Footer/> : ''}
    </div>
  )
}

