import Menu from './components/Menu';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Experience from './components/Experience';
import Technology from './components/Technology';
import Brands from './components/Brands';
import Stats from './components/Stats';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <header>
        <Menu />
      </header>
      <main>
        <Hero />
        <Services />
        <Products />
        <Experience />
        <Technology />
        <Brands />
        <Stats />
        <Footer />
      </main>
    </div>
  );
}

export default App;
