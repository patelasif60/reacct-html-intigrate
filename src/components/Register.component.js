import React from 'react';
const RegisterComponent = () =>{
    return (
        <>
            <div className="container-wrapper">
                <section className="page-registration page-wrapper registration-wrapper background-property position-relative">
                    <div className="page-overlay"></div>
                </section>
                <section className="page-section top-curve">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-10 col-10 mx-auto">
                                <form className="registration-form multiform pb-5">
                                    <div className="page-icon d-flex justify-content-center align-items-center">
                                        <img src="assets/icons/textbook.svg" alt='' className="img-fluid page-icon-top"/>
                                    </div>
                                    <h1 className="text-center text-primary mb-3">Register Now !!!</h1>
                                    <div className="form-floating input-container">
                                        <div className="input-icon input-icon-left">
                                            <img src="assets/icons/user-icon.svg" alt=''/>
                                        </div>
                                        <input type="text" className="form-control" id="firstname" placeholder="First Name" autoComplete="off" required />
                                        <label htmlFor="firstname">First Name<span className="text-danger fw-bold">*</span></label>
                                    </div>
                                    <div className="form-floating input-container">
                                        <div className="input-icon input-icon-left">
                                            <img src="assets/icons/user-icon.svg" alt='' />
                                        </div>
                                        <input type="text" className="form-control" id="lastname" placeholder="Last Name" autoComplete="off" required />
                                        <label htmlFor="lastname">Last Name<span className="text-danger fw-bold">*</span></label>
                                    </div>
                                    <div className="form-floating input-container">
                                        <div className="input-icon input-icon-left">
                                            <img src="assets/icons/mobile-icon.svg" alt='' />
                                        </div>
                                        <input type="number" className="form-control" id="mobile" placeholder="Mobile No." autoComplete="off" required />
                                        <label htmlFor="mobile" >Mobile No.<span className="text-danger fw-bold">*</span></label >
                                    </div>
                                    <div className="form-floating input-container">
                                        <div className="input-icon input-icon-left">
                                            <img src="assets/icons/email-icon.svg" alt=''/>
                                        </div>
                                        <input type="email" className="form-control" id="email_id" placeholder="Email ID" autoComplete="off" required />
                                        <label htmlFor="email_id">Email ID<span className="text-danger fw-bold">*</span></label>
                                    </div>
                                    <div className="form-floating input-container">
                                        <div className="input-icon input-icon-left">
                                            <img src="assets/icons/padlock-icon.svg" alt='' />
                                        </div>
                                        <input type="password" className="form-control" id="password" placeholder="Create Password" autoComplete="off" required />
                                        <label htmlFor="password">Create Password<span className="text-danger fw-bold">*</span></label>
                                        <div>
                                            <div className="input-icon input-icon-right">
                                                <img src="assets/icons/information-icon.svg" alt="information-icon" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating input-container">
                                        <div className="input-icon input-icon-left">
                                            <img src="assets/icons/padlock-icon.svg" alt=''/>
                                        </div>
                                        <input type="password" className="form-control" id="confirm_password" placeholder="Confirm Password" autoComplete="off" required />
                                        <label htmlFor="confirm_password">Confirm Password<span className="text-danger fw-bold">*</span></label>
                                        <div className="input-icon input-icon-right"id="toggle-icon"title="toggle-password">
                                            <i className="fas fa-eye-slash"></i>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        By Sign Up you are agreeing to our
                                        {/* <a href="#" className="hover-underline">Terms & condition</a> and
                                        <a href="#" className="hover-underline">Privacy Policy</a> */}
                                    </div>
                                    <div className="row justify-content-center align-items-center">
                                        <input type="submit" value="Sign Up" className="gradient-button btn btn-warning text-white py-2 rounded-3 col-sm-8 col-10"/>
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

export default RegisterComponent