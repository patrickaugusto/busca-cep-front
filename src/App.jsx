import { useState } from 'react';
import './App.css';
import CepForm from './components/form/CepForm';
import Footer from './components/footer/Footer';
import Popup from './components/popup/PopUp';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <h2>Consultar CEP</h2>
        <sup>
          <span className="interrogation-icon" onClick={togglePopup}>
            ?
          </span>
        </sup>

      </div>

      <Popup show={showPopup} onClose={togglePopup} />

      <CepForm />
      <Footer />
    </>
  );
}

export default App;
