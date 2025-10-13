import { useMediaQuery } from 'react-responsive';

import { About } from './components/About';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      <AnimatedBackground>
        {isMobile ? <MobileMenu /> : <Navbar />}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </AnimatedBackground>
    </>
  );
}

export default App;
