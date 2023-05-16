import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">
      <button className='open-modal-btn' onClick={() => setIsModalOpen(true)}>Open modal</button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <h1>The Earth</h1>
        <img src='https://www.pnp.ru/upload/entities/2021/04/19/18/article/detailPicture/7e/66/9f/55/23c871532e2289d5791561c8adda1a1a.jpg' alt='earth'/>
        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
      </Modal>
    </div>
  );
}

export default App;
