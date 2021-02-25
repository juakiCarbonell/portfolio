import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About'

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
    </>
  );
}

export default App;
