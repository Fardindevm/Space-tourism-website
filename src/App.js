import { Outlet} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [showFooter, setShowFooter] = useState(false)

  return (
    <>
    <Header />
      <Outlet />
      <Footer showFooter={showFooter} setShowFooter={setShowFooter}/>
    </>
  );
}

export default App;
