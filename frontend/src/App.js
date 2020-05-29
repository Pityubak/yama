import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Sidebar from './pages/sidebar/Sidebar';
import WelcomePanel from './panels/welcome-panel/WelcomePanel';
import EditorPanel from './panels/editor-panel/EditorPanel';
import AboutPanel from './panels/about-panel/AboutPanel';
import LoginPanel from "./panels/login-panel/LoginPanel";
import PrivateRoute from './components/private-route/PrivateRoute';

function App() {
  return (
    <Router >
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={WelcomePanel} />
          <PrivateRoute  path="/editor" isLogged={false} component={<EditorPanel />} />
          <Route  path="/about" component={AboutPanel} />
          <Route  path="/login" component={LoginPanel} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
