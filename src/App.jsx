
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesList from './routes/RoutesList';
import { BrowserRouter } from 'react-router';


function App() {

  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
     
  )
}

export default App
