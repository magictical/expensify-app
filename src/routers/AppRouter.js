import React from 'react';
// Switch for 404 error route's conditional state
// import Link for routing client side if in a server side routing use <a>
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


// Create 6 new files for the 6 components
// setup imports, component, default export
//import into AppRouter so they can  be used
const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensPage = () => (
    <div>
        This is from my add expense component
    </div>
);

const EditExpensPage = () => (
    <div>
        This is EditExpensePage compnent
    </div>
);

const HelpExpensPage = () => (
    <div>
        This is HelpExpensePage compnent
    </div>
);

const NotFoundPage = () => (
    <div>
        404! error - <Link to="/">Go home</Link>
    </div>
);


const Header = () => (
    <header>
        <h1>Expensify</h1>
        
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>move to Home </NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">move to create </NavLink></li>
            <li><NavLink to="/edit" activeClassName="is-active">move to edit </NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">move to help </NavLink></li>
        </ul>
        

        
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensPage}/>
            <Route path="/edit" component={EditExpensPage}/>
            <Route path="/help" component={HelpExpensPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
        
    </BrowserRouter>
);
// <Switch> : if browser can't find the route on the below path than move to NotFoundPage
// Switch needs <Route> for its child element
    
export default AppRouter;