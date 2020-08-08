import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
     <Router>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>

       <Switch>
         <Route exact path = "/">
           <h1>Hello From Home</h1>
         </Route>
         <Route exact path = "/about">
           <h1>Hello From About</h1>
         </Route>
         {/* <Route exact path = "/contact">
           <Form/>
         </Route> */}
        {/*This is another way of writing it*/}
         <Route exact path = "/contact" component={Form}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
