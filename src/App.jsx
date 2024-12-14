import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import PracticeAreas from './Components/PracticeAreas';
import Team from './Components/Team';
import Blog from './Components/Blog';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <PracticeAreas />
      <Team />
      <Blog />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
