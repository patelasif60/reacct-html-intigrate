import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/LoginSlice'
import { useForm } from 'react-hook-form'

const LoginComponent = () =>{
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm()
    const submitForm = async (data) =>{
       try {
          const response = await axios.post(process.env.REACT_APP_API_URL + 'login', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          dispatch(login(response.data));
        } catch (error) {
          console.error(error);
        }
    } 
    
    return (
        <>
        <div className="container-wrapper">
            <div className="language-translate">
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="assets/icons/translate.svg" alt="multilinguial" />
                </button>
                <ul className="dropdown-menu">
                    <li>
                     <a className="dropdown-item" href="#top">Sanskrit</a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#top">Hindi</a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#top">Punjabi</a> 
                    </li>
                </ul>
                </div>
            </div>
            <section className="page-login page-wrapper login-wrapper background-property position-relative">
                <div className="page-overlay"></div>
            </section>
            <section className="page-section login-page-section top-curve-info">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-10 col-10 mx-auto">
                            <form onSubmit={handleSubmit(submitForm)} className="registration-form multiform">
                                <h2 className="text-capitalize welcome-text h1"> welcome to <span className="text-bt-dark-orange">Tailor</span></h2>
                                <div className="page-icon d-flex justify-content-center align-items-center">
                                    <img src="assets/icons/login.svg" alt='' className="img-fluid bottom-100" />
                                </div>
                                <h1 className="text-center mild-text my-3">Sign In</h1>
                                <div className="form-floating input-container">
                                    <div className="input-icon input-icon-left">
                                        <img src="assets/icons/mobile-icon.svg" alt='' />
                                    </div>
                                    <input type="number"  {...register('mobile')} className="form-control bg-white" id="mobile"  placeholder="Mobile No." autoComplete="off" required />
                                    <label htmlFor="mobile">Mobile No. <span className="text-danger fw-bold">*</span></label>
                                </div>
                                <div className="form-floating input-container">
                                    <div className="input-icon input-icon-left">
                                        <img src="assets/icons/padlock-icon.svg" alt='' />
                                    </div>
                                    <input type="password" {...register('password')} className="form-control bg-white" id="password" placeholder="Password" autoComplete="off" required />
                                    <label htmlFor="confirm_password">Password <span className="text-danger fw-bold">*</span></label>
                                    <div className="input-icon input-icon-right" id="toggle-icon" title="toggle-password">
                                        <i className="fas fa-eye-slash"></i>
                                    </div>
                                </div>
                                <div className="my-2 text-end">
                                    <a href="#top" className="hover-underline forgot-link">Forgot Password?</a>
                                </div>
                                <div className="row justify-content-center align-items-center my-4">
                                    <input type="submit" value="Login" className="gradient-button btn btn-warning text-white py-2 rounded-3 col-sm-8 col-10" />
                                </div>
                                <div className="my-5 text-center mild-text"> Don't have an account? <a href="/register" className="hover-underline">Sign Up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default LoginComponent