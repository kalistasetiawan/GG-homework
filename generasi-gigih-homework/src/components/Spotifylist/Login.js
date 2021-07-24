import React from 'react';
import Header from '../List/header';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div>
          <Header />
            <a href={loginUrl}>LOGIN</a>
        </div>
    )
}

export default Login;