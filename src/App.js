import React from 'react';
import Input from './components/input/input.component';
import NavbarHeader from './components/header/navbar.component';
import Footer from './components/footer/footer.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
