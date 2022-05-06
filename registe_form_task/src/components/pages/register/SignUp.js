import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5 form-block">
                        <div className="form-box p-4 row justify-content-center align-items-center">
                            <h4 className="text-center mb-4">
                                Create an account
                            </h4>
                            <form className="col-8">
                                <div className="form-input">
                                    <span><i className="fa fa-user-o" /></span>
                                    <input type="text" name placeholder="Full Name" required />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-envelope-o" /></span>
                                    <input type="email" name placeholder="Email Address" tabIndex={10} required />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-key" /></span>
                                    <input type="password" name placeholder="Password" required />
                                </div>
                                <div className="mb-2 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-block px-4 py-2 mt-1">
                                        Register
                                    </button>
                                </div>
                                <div className="text-right mb-5">
                                    Already have an account 
                                    <Link to="/" className="login-link" > Login here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default SignUp;