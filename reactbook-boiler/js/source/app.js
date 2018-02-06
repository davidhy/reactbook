'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import UpgradeSports from './components/UpgradeSports';

ReactDOM.render(
  <h1>
    <Logo /> Welcome to The App! 
    <br/>
    <UpgradeSports/> 
  </h1>,
  document.getElementById('app')
);