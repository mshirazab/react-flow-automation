import React from 'react';
import styles from './App.module.scss';
import Header from './layout/Header';
import Login from './components/Login';

const App = () => (
  <div className={styles.layout}>
    <Header />
    <content>
      <Login />
    </content>
  </div>
);
export default App;
