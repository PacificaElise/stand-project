import React from 'react';
import { ContextProvider } from './contex';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
