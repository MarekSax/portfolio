import { Divider } from './components/Divider';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <div className="second" id="second">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          obcaecati cum voluptatem eos enim delectus esse repellendus minus
          molestias beatae minima. Eius aut autem sint quo labore voluptatem
          repellat mollitia.
        </div>
        <Divider />
      </div>
    </>
  );
}

export default App;
