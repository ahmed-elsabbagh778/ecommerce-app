import NavBar from './components/NavBar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Card';
import ProductsList from './pages/ProductsList';


function App() {

  return (
     

    <>
    <NavBar />
    <ProductsList />
    </>
    // <BrowserRouter>
    //   <RoutesList />
    // </BrowserRouter>
     
  )
}

export default App
