import React from 'react';
import { UserList } from './components/UserList';
import { UserDetail } from './components/UserDetail';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css'

export const App = () => {

  return (
    <div className="App">
      <h2>Hello Redux</h2>

      {/* <Switch>
        <main className="main">
          <Route path="/" component={UserList} exact />
        </main>
      </Switch> */}

      <UserList />
      <UserDetail />
    </div>
  );
}
