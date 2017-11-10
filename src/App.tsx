import * as React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';
class App extends React.Component {
  render() {
    const element: JSX.Element = (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => (true ? <Redirect to="/welcome" /> : <App />)} />
          {
            routes.map((route, index) => {
              return <Route key={index} path={route.path} component={route.component} />;
            })
          }
        </div>
      </BrowserRouter>
    );
    return element;
  }
}

export default App;
