import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  );
}

// JSX Element
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// Manually created React element
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit Google'
);

createRoot(document.getElementById('root')).render(
  
    reactElement
  
);
