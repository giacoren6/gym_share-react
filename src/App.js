import React, { createContext, useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import axios from 'axios';


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const { data } = await axios.get("/dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route path='/' exact>
                <h1>Gym Share home page</h1>
              </Route>
              <Route path='/signin'>
                <SignInForm />
              </Route>
              <Route path='/signup'>
                <SignUpForm />
              </Route>
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;