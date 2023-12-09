import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Experience from './components/Experience';
import Technology from './components/Technology';
import Brands from './components/Brands';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Navbar />
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
