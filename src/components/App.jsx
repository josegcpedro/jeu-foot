import Questions from '../data/questions.json';
import { useState } from 'react';
import Ballon from './Ballon';


function App() {
  const [score, setScore] = useState(0);
  const [data, setData] = useState(Questions);

  return (
    <div className="card">
      <h1 id='points' className="text-white">Score: {score}</h1>
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
      <Ballon score={score} setScore={setScore} data={data} setData={setData}  />
    </div>
  );
}

export default App;
