import { RegistrationForm } from './components/RegistrationForm'
import { Home } from './components/Home'
import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState([]);

  return (
    <div className="App">
      {
        // Si user es mayor a 0 nos mostrará el Home
        !user.length > 0
          ? <RegistrationForm setUser={setUser} />
          : <Home />
      }
    </div>
  );
}

export default App;
