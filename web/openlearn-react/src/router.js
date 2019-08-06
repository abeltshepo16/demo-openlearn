import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Courses from './Courses';

class App extends React.Component{
render() {
    return (
        <Router >
            <div>

                <nav id="menu">
                    <h2>Menu</h2>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/SignUp'}>Sign Up</Link></li>
                        <li><Link to={'/Login'}>Login</Link></li>

                    </ul>
                </nav>



                <Switch>
                    <Route exact path='/' component={Courses}/>
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Login' component={Login} />
                        <Route exact path='/ForgotPassword' component={ForgotPassword}/>



                </Switch>
            </div>
        </Router>
    );
}
}
export default App;
