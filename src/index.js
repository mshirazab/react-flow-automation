import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const wrapper = document.getElementById('yp_widget');
if (wrapper) ReactDOM.render(<App />, wrapper);
