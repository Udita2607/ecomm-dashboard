import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>E-Comm Project</h1>
        <button>Normal button</button>
        <Button>Bootstrap Button</Button>
      </div>
    </>
  );
}

export default App;
