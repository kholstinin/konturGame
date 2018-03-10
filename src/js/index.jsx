import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/app/app.jsx';
import baseStyles from './components/baseStyles/base-styles';

baseStyles();
ReactDOM.render(<App/>, document.getElementById('root'));