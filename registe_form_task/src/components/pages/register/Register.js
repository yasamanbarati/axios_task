import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5 form-block">
                        <div className="form-box">
                            <div className="reset-form p-4 row justify-content-center align-items-center">
                                <form className="reset-password-form">
                                    <h4 className="mb-3 text-center">Reset Your password</h4>
                                    <p className="mb-3" style={{ color: '#777' }}>
                                        Please enter your email address and we will send you a password reset link.
                                    </p>
                                    <div className="form-input">
                                        <span><i className="fa fa-envelope-o" /></span>
                                        <input type="email" name placeholder="Email Address" required />
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn">Send Reset Link</button>
                                    </div>
                                    <div className="text-center mb-5">
                                        Already have password
                                    <Link to="/" className="login-link" > Login here</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="reset-confirmation d-none">
                                <div className="mb-4">
                                    <h4 className="mb-3 text-center">Link was sent</h4>
                                    <h6>Please, check your inbox for a password reset link.</h6>
                                </div>
                                <div className="mb-4">
                                    <Link to="/" className="login-link" > Login here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Register;