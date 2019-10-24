import React from "react";
import styles from "./App.module.scss";
import Header from "./layout/Header";

const App = () => {
  return (
    <div className={styles.layout}>
      <Header></Header>
    </div>
  );
};
export default App;
