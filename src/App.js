import { Footer } from "./components/Footer";
import { Platform } from './components/Platform'
import { Pricing } from './components/Pricing'
import { Support } from './components/Support'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Navbar } from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Platform />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
