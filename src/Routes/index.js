import { Switch } from 'react-router-dom';
import Route from './routes';

import SignIn from '../Pages/SingIn';
import SignUp from '../Pages/SingUp';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Customers from '../Pages/Customers';
import New from '../Pages/New';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />

      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/profile" component={Profile} isPrivate />
      <Route exact path="/customers" component={Customers} isPrivate />
      <Route exact path="/new" component={New} isPrivate />
      <Route exact path="/new/:id" component={New} isPrivate />
      
    </Switch>
  )
}