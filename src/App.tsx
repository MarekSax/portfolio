import { useMediaQuery } from 'react-responsive';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      {isMobile ? <MobileMenu /> : <Navbar />}
      <Hero />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
