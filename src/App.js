import { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <button className='open-modal-btn' onClick={() => setIsModalOpen(true)}>Open modal</button>
      <div className={`overlay animated ${isModalOpen ? 'show' : ''}`}>
        <div className='modal'>
          <svg onClick={() => setIsModalOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                  <title />
                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
