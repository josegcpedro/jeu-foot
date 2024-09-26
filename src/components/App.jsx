import { useState } from 'react';
import Ballon from './Ballon';

function App() {
  const [score, setScore] = useState(10);
  return (
    <div className="card">
      <h1 className="text-white">Score: {score}</h1>
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
