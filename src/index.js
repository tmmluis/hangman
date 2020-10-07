import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game'

// ========================================

ReactDOM.render(
  <Game answer="Star Wars" category="Movie Title" />,
  document.getElementById('root')
)