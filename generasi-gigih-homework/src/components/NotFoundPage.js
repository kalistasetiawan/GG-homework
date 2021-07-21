import React from 'react';
import { Link } from 'react-router-dom';
import Header from './List/header';

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <Header />
            Page Not Found. Go to <Link to="/dashboard">Home Page</Link>
        </React.Fragment>
    )
}

export default NotFoundPage;