import React from 'react';
import { Switch, Route} from 'react-router-dom';
import routes from './routers/routes';

const App: React.FC = () => {
  return (
    <div className="mainApp">
      <Switch>
        {
          routes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
          })
        }
      </Switch>
    </div>
  );
}

export default App;
