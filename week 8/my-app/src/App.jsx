import { useState } from 'react';
import Password from './Password.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Password />
    </div>
  )
}

export default App;
