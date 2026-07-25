import Hero from './components/Hero';
import Details from './components/Details';
import Godparents from './components/Godparents';
import RSVP from './components/RSVP';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import FallingStars from './components/FallingStars';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <>
      <FallingStars />
      <BackgroundMusic />
      <Hero />
      <Countdown />
      <Details />
      <Godparents />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;
