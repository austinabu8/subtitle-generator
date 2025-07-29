import React, { useState, useRef } from 'react';
import Navbar from './Nav';
import Home from './Home';
import Description from './Description';
import Feedback from './Feedback';
import Developer from './Developer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  // Refs for smooth scrolling
  const homeRef = useRef(null);
  const descriptionRef = useRef(null);
  const feedbackRef = useRef(null);
  const developerRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      description: descriptionRef,
      feedback: feedbackRef,
      developer: developerRef
    };
    
    refs[section]?.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Navbar 
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      
      <main className="main-content">
        <section ref={homeRef} id="home" className="section">
          <Home />
        </section>
        
        <section ref={descriptionRef} id="description" className="section">
          <Description />
        </section>
        
        <section ref={feedbackRef} id="feedback" className="section">
          <Feedback />
        </section>
        
        <section ref={developerRef} id="developer" className="section">
          <Developer />
        </section>
      </main>
    </div>
  );
};

export default App;
