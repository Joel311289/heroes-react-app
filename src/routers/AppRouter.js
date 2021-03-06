import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import LoginScreen from '../pages/LoginPage';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" isAuthenticated={user.logged} component={LoginScreen} />

          <PrivateRoute path="/" isAuthenticated={user.logged} component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
