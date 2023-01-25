import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import History from './Components/History';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <History />
      <ContactUs />
    </>
  );
}

export default App;
