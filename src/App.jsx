import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import './App.css'
import Residencies from './components/Residencies/Residencies';

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <Companies />
        <Residencies />
      </div>
    </div>
  );
}

export default App;
