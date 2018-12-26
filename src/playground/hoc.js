// Higher Order Component - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstact state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ?  (
            <div>
                <p>you've signed in</p>
                <WrappedComponent {...props} /> 
            </div>
            ) : (
                <p>you need to get an Auth to see this page</p>
                )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={true} isAdmin={true} info="There are the details" />, document.getElementById('app'));