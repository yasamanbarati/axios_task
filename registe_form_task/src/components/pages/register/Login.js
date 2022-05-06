import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [remember, setRemember] = useState(false);
    // const [validate, setValidate] = useState({});
    // const [showPassword, setShowPassword] = useState(false);


    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5 form-block">
                        <div className="form-box p-4 row justify-content-center align-items-center">
                            <h4 className="text-center mb-4">
                                Login into account
                            </h4>
                            <form className="col-8">
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
                                        Login
                                    </button>
                                </div>
                                <div className="text-right mt-4 mb-2">
                                    <Link to="/Register" className="forget-link">Forgot password?</Link>
                                </div>
                                <div className="text-right mb-3">
                                    Don't have an account?
                                    <Link to="/Sign_Up" className="register-link">Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Login;