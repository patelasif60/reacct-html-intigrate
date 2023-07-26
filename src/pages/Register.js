import React from 'react';
import RegisterComponent from '../components/Register.component';
import { CommonCss,CommonJs } from '../layouts/app.layout';

const Register = () => {
    return (
        <div>
        <CommonCss />
        <RegisterComponent />
        <CommonJs />
      </div>
    );
  };
  
  export default Register;