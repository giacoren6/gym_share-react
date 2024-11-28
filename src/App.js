import React from 'react';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route path='/' exact>
            <h1>Gym Share home page</h1>
          </Route>
          <Route path='/signin'>
            <h1>Sign in</h1>
          </Route>
          <Route path='/signup'>
            <h1>Sign up</h1>
          </Route>
        </Switch>
        <h1>Gym Share home page</h1>
        <h1>Sign in</h1>
      </Container>
      <header className="App-header">
        <h1>My Gym Share</h1>
      </header>
    </div>
  );
}

export default App;