import React from 'react';
import { Provider } from 'react-redux'
import { configStore } from '../redux/store'
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

// core Components
import Admin from './layouts/Admin'

const hist = createBrowserHistory();
const store = configStore({}, hist)

function App() {
  return (
    <Provider store={store}>
      <Router history={hist}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/admin" component={Admin} />
            <Redirect from="/" to="/admin/home" />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
    
  );
}

export default App;
