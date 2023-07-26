import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const RegisterComponent = () =>{

    const [userData, setUserData] = useState({firstname: '',lastname: '',mobile: '',email_id: '',password: '',confirm_password: ''});
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
          const response = await axios.post(process.env.REACT_APP_API_URL + 'register', userData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data);
          navigate('/login');
        } catch (error) {
          console.error(error);
        }
    };

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
                            <form onSubmit={handleSubmit} className="registration-form multiform pb-5">
                                <div className="page-icon d-flex justify-content-center align-items-center">
                                    <img src="assets/icons/textbook.svg" alt='' className="img-fluid page-icon-top"/>
                                </div>
                                <h1 className="text-center text-primary mb-3">Register Now !!!</h1>
                                <div className="form-floating input-container">
                                    <div className="input-icon input-icon-left">
                                        <img src="assets/icons/user-icon.svg" alt=''/>
                                    </div>
                                    <input type="text" className="form-control" name="firstname" id="firstname" value={userData.firstname} onChange={handleInputChange} placeholder="First Name" autoComplete="off" required />
                                    <label htmlFor="firstname">First Name<span className="text-danger fw-bold">*</span></label>
                                </div>
                                <div className="form-floating input-container">
                                    <div className="input-icon input-icon-left">
                                        <img src="assets/icons/user-icon.svg" alt='' />
                                    </div>
                                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" value={userData.lastname} onChange={handleInputChange}  autoComplete="off" required />
                                    <label htmlFor="lastname">Last Name<span className="text-danger fw-bold">*</span></label>
                                </div>
                                <div className="form-floating input-container">
                                    <div className="input-icon input-icon-left">
                                        <img src="assets/icons/mobile-icon.svg" alt='' />
                                    </div>
                                    <input type="number" name="mobile" className="form-control" id="mobile" placeholder="Mobile No." value={userData.mobile} onChange={handleInputChange}  autoComplete="off" required />
                                    <label htmlFor="mobile" >Mobile No.<span className="text-danger fw-bold">*</span></label >
                                </div>
                                <div className="form-floating input-container">
                                    <div className="input-icon input-icon-left">
                                        <img src="assets/icons/email-icon.svg" alt=''/>
                                    </div>
                                    <input type="email" name="email_id" className="form-control" id="email_id" placeholder="Email ID"  value={userData.email_id} onChange={handleInputChange} autoComplete="off" required />
                                    <label htmlFor="email_id">Email ID<span className="text-danger fw-bold">*</span></label>
                                </div>
                                <div className="form-floating input-container">
                                    <div className="input-icon input-icon-left">
                                        <img src="assets/icons/padlock-icon.svg" alt='' />
                                    </div>
                                    <input type="password" name="password" className="form-control" id="password" placeholder="Create Password" value={userData.password} onChange={handleInputChange} autoComplete="off" required />
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
                                    <input type="password" name="confirm_password" className="form-control" id="confirm_password" placeholder="Confirm Password" value={userData.confirm_password} onChange={handleInputChange}  autoComplete="off" required />
                                    <label htmlFor="confirm_password">Confirm Password<span className="text-danger fw-bold">*</span></label>
                                    <div className="input-icon input-icon-right"id="toggle-icon"title="toggle-password">
                                        <i className="fas fa-eye-slash"></i>
                                    </div>
                                </div>
                                <div className="my-3">
                                    By Sign Up you are agreeing to our
                                    <Link className="hover-underline" to="#">Terms & condition </Link> and
                                    <Link className="hover-underline" to="#">Privacy Policy</Link> 
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