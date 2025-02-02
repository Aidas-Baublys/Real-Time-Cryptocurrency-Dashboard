import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './app.css';

function App() {
  const [message, setMessage] = useState('');

  const ws = new WebSocket('ws://localhost:8000');

  ws.onmessage = event => {
    const msg = JSON.parse(event.data);

    console.log('🚀 ~ App ~ msg:', msg);

    setMessage(msg.p);
  };

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        {/* <Chart /> */}
        <div>{message}</div>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
