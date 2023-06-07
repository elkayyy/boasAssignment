import MainCart from './Components/MainCart/MainCart';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Featured from './Components/Featured/Featured';
import FeaturedPhotos from './Components/FeaturedPhotos/FeaturedPhotos';
import FeaturedPhotos2 from './Components/FeaturedPhotos2/FeaturedPhotos2';
import CustomerReviews from './Components/CustomerReviews/CustomerReviews';
import Cart1 from './Components/Cart1/Cart1';
function App() {
  return (
  <div className='App'>
  <NavBar/>
  <MainCart/>
  <Featured/>
  <FeaturedPhotos/>
  <FeaturedPhotos2/>
  <CustomerReviews/>
  <Cart1/>
  </div>

   
  );
}

export default App;
