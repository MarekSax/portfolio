import { About } from './components/About';
import { Divider } from './components/Divider';

import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
    </>
  );
}

export default App;
