import React from 'react';
import './Popup.css';

function PopUp({ show, onClose }) {
  if (!show) return null;

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>

      <div className="popup-content">
        <h3>Privacidade dos Dados</h3>
        <p>Os dados informados no formulário não são compartilhados nem armazenados em nosso sistema.</p>
        <button className="popup-close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </>
  );
}

export default PopUp;
