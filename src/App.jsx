import Hero from './components/Hero';
import Details from './components/Details';
import Godparents from './components/Godparents';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <>
      <BackgroundMusic />
      <Hero />
      <Details />
      <Godparents />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;
