import React from 'react';
import LoginComponent from '../components/Login.component';
import { CommonCss,CommonJs } from '../layouts/app.layout';

const Login = () => {
  return (
    <div>
      <CommonCss />
      <LoginComponent />
      <CommonJs />
    </div>
  );
};

export default Login;