
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutesList from './routes/RoutesList';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/language';


function App() {

  return (
    <LanguageProvider>
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
    </LanguageProvider>
     
  )
}

export default App
