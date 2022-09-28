import './App.scss';
import Hero from './components/Hero/Hero';
import Aboutme from './components/Aboutme/Aboutme';
import Projectsection from './components/Projectsection/Projectsection';
import Connect from './components/Connect/Connect';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Hero/>
        <Aboutme/>
        <Projectsection/>
        <Connect/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
