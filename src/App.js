import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppBar, CSSBaseline, ThemeContext } from './components';
import { Countries, Country } from './pages';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <ThemeContext.Provider value={isDark}>
        <CSSBaseline isDark={isDark} />
        <AppBar onThemeToggle={toggleTheme} />
        <Switch>
          <Route path="/countries/:name" component={Country} />
          <Route path="/countries" component={Countries} />
          <Route path="/" component={Countries} />
        </Switch>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
