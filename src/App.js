import React from 'react';
import MainLayout from './layout';
import Banner from './components/Banner';
import './App.css';

const App = () => (
  <div className="app">
    <MainLayout>
      <Banner />
    </MainLayout>
  </div>
);

export default App;