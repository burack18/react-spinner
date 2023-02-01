import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';

function App() {
  const [deg, setDeg] = useState(90)
  useEffect(() => {
    setInterval(()=>{
      setDeg(prev=>prev+1)
    },25)
  }, [])

  return (
    <div className="App">
      <div style={{ position: 'fixed', top: '50%', left: '50%' ,opacity:'1.5'}}>
        <div style={{ position: 'relative', width: "50px", backgroundColor: 'blue', height: '50px', borderRadius: '50%', margin: 'auto' }}>
          <div style={{ position: 'absolute', top: '10%', left: '10%', width: "40px", backgroundColor: 'white', height: '40px', borderRadius: '50%' }} >
            <div style={{ position: 'absolute', borderRadius: '0px 12px 10px 0px', left: '-5px', top: '15px', rotate: `${deg}deg`, height: '10px', background: 'linear-gradient(90deg,white 50%, blue 100%)', width: '50px' }}>
            </div>
            <div style={{ position: 'absolute', width: "40px", backgroundColor: 'white', height: '40px', borderRadius: '50%' }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
