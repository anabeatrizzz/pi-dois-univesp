import './App.css';
import React from 'react';
import Home from './pages/home';
import WrapperPage from './components/wrapper-page';

function App() {
  return (
    <WrapperPage>
      <Home />
    </WrapperPage>
  );
}

export default App;
