import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import './Navbar.css';
import App from './App';
import Banner from './Components/Banner';
import About from './Components/About';
import Support from './Components/Support';
import Footer from './Footer/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <About />
    <Support/>
    <App/>
    <Footer />
  </React.StrictMode>
);

