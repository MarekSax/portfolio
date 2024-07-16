import { About } from './components/About';

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
    </>
  );
}

export default App;
