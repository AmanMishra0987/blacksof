
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import Ecosystem from './components/Ecosystem/Ecosystem';

import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Assits from './components/Assit/Assits';

function App() {


  return (
    <>
      <NavBar />
      <div style={{ background: '#EFF8FF' }}>
        <HeroSection />
        <Ecosystem />
        <Products />
      </div>
      <Assits />
      <Footer />
    </>
  )
}

export default App
