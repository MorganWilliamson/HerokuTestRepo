import './App.css';
import { useState, useEffect } from 'react';

// NPM Run Start: Development
// NPM Run Build: Production

function url(path) {
  return process.env.NODE_ENV === 'development' 
  ? `http://localhost:5000${path}` 
  : ''
};

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch(url('/api/data'))
      .then((res) => res.json())
      .then((theGoods) => setData(theGoods))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          { data }
          wowowowowowowowowowowowow
        </p>
      </header>
    </div>
  );
}

export default App;
