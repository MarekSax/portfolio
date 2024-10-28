import { useMediaQuery } from "react-responsive";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { MobileMenu } from "./components/MobileMenu";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
