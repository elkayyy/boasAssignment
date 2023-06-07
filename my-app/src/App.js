import './App.css'
import MainCart from './Components/MainCart/MainCart';
import NavBar from './Components/NavBar/NavBar';
import Featured from './Components/Featured/Featured';
import FeaturedPhotos from './Components/FeaturedPhotos/FeaturedPhotos';
import FeaturedPhotos2 from './Components/FeaturedPhotos2/FeaturedPhotos2';
import CustomerReviews from './Components/CustomerReviews/CustomerReviews';
import Brands from './Components/Brands/Brands';
import BoasBlog from './Components/BoasBlog/BoasBlog'
import Cart1 from './Components/Cart1/Cart1';
import Cart2 from './Components/Cart2/Cart2'
import Cart3 from './Components/Cart3/Cart3'
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Footer from './Components/Footer/Footer';

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
  <Cart2/>
  <Cart3/>
  <Brands/>
  <BoasBlog/>
  <NewsLetter/>
  <Footer/>
  </div>

   
  );
}

export default App;
