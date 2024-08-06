import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import Navigation from './routes/Navigation';
import routes from './routes/routes';

function App() {
  const routing = useRoutes(routes);

  return (
    <div>
      <Navigation />
      {routing}
    </div>
  );
}

export default App;
