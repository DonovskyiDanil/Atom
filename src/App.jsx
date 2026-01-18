import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Ways from './components/Ways/Ways';
import HowItWorks from './components/HowItWorks/HowItWorks'; 
import Container from './components/Container/Container';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './index.css'; 
import SearchSection from './components/SearchSection/SearchSection';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Container>
          <Hero />
        </Container>
        <Ways />
        <HowItWorks /> 
        <FAQ />
        <SearchSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;