import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { App } from './App'


var d = new Date()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)