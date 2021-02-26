import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Experience />
    </>
  );
}

export default App;
