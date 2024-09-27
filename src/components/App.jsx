import { useState } from 'react';
import Ballon from './Ballon';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="card">
      <h1 id='points' className="text-white">Score: {score}</h1>
      <Ballon score={score} setScore={setScore}/>
      <Ballon score={score} setScore={setScore} />
      <div className="another-section">
        <Ballon score={score} setScore={setScore} />
      </div>
      <div className="yet-another-section">
        <Ballon score={score} setScore={setScore} />
      </div>
    </div>
  );
}

export default App;
