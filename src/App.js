import React from 'react';
import { Footer, Blog, Possibility, Features, WhatLatte, Header} from './containers'
import { Brand, CTA, Navbar} from './components'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='bg'>
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatLatte/>
      <Features />
      <Possibility/>
      <CTA />
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
