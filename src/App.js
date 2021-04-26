import React from 'react';
import { request } from './api';
import { useState, useEffect } from 'react';
import { UserList } from './components/UserList';
import './App.css';
import 'bulma/css/bulma.css'

export const App = () => {
  const [test, setTest] = useState([]);
  
  useEffect(() => {
    request().then(result => setTest(result))
  }, [])


  console.log(test);

  return (
    <div className="App">
      <h2>Hello Redux</h2>

      <main className="main">
        <UserList />

      </main>
    </div>
  );
}
