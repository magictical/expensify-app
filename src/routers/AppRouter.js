import React from 'react';
// Switch for 404 error route's conditional state
// import Link for routing client side if in a server side routing use <a>
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashBoardpage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpExpensePage from '../components/HelpExpensePage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import Header from '../components/Header.js';


const AppRouter = () => (
    // <Switch> : if browser can't find the route on the below path than move to NotFoundPage
    // Switch needs <Route> for its child element
    <BrowserRouter>
    <div>
        <Header />
        <Switch > 
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
        
    </BrowserRouter>
);

    
export default AppRouter;