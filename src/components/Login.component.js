import React from 'react';
const LoginComponent = () =>{
    return (
        <>
        <div class="container-wrapper">
            <div class="language-translate">
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="assets/icons/translate.svg" alt="multilinguial" />
                </button>
                <ul class="dropdown-menu">
                    <li>
                    {/* <a class="dropdown-item" href="#">Sanskrit</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">Hindi</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="#">Punjabi</a> */}
                    </li>
                </ul>
                </div>
            </div>
            <section class="page-login page-wrapper login-wrapper background-property position-relative">
                <div class="page-overlay"></div>
            </section>
            <section class="page-section login-page-section top-curve-info">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6 col-md-12 col-sm-10 col-10 mx-auto">
                            <form class="registration-form multiform">
                                <h2 class="text-capitalize welcome-text h1"> welcome to <span class="text-bt-dark-orange">Tailor</span></h2>
                                <div class="page-icon d-flex justify-content-center align-items-center">
                                    <img src="assets/icons/login.svg" alt='' class="img-fluid bottom-100" />
                                </div>
                                <h1 class="text-center mild-text my-3">Sign In</h1>
                                <div class="form-floating input-container">
                                    <div class="input-icon input-icon-left">
                                        <img src="assets/icons/mobile-icon.svg" alt='' />
                                    </div>
                                    <input type="number" class="form-control bg-white" id="mobile" placeholder="Mobile No." autocomplete="off" required />
                                    <label for="mobile">Mobile No. <span class="text-danger fw-bold">*</span></label>
                                </div>
                                <div class="form-floating input-container">
                                    <div class="input-icon input-icon-left">
                                        <img src="assets/icons/padlock-icon.svg" alt='' />
                                    </div>
                                    <input type="password" class="form-control bg-white" id="confirm_password" placeholder="Password" autocomplete="off" required />
                                    <label for="confirm_password">Password <span class="text-danger fw-bold">*</span></label>
                                    <div class="input-icon input-icon-right" id="toggle-icon" title="toggle-password" onclick="togglePassword()">
                                        <i class="fas fa-eye-slash"></i>
                                    </div>
                                </div>
                                <div class="my-2 text-end">
                                    <a href="#top" className="hover-underline forgot-link">Forgot Password?</a>
                                </div>
                                <div class="row justify-content-center align-items-center my-4">
                                    <input type="submit" value="Login" class="gradient-button btn btn-warning text-white py-2 rounded-3 col-sm-8 col-10" />
                                </div>
                                <div class="my-5 text-center mild-text"> Don't have an account? <a href="#" class="hover-underline">Sign Up</a>
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