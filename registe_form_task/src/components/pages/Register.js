import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [password1, setpassword1] = useState('');

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
        const data = {
            email: email,
            password: password
        }
        axios.put('http://localhost:5000/data', data).then(res => {
            setData(res.data);
            setEmail(handleChange);
            setpassword(handleChange);
            setpassword1(handleChange);
            if (password === password1 && password.length >= 8) {
                setLoading(false);
                alert("رمز عبور شما با موفقیت تغییر یافت");
            }
            else{
                clearPutOutput();
            }
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        })
    }

    const handleChange = (e) => { return e.target.value; }

    const clearPutOutput = () => { setEmail(null); };

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-10 col-10 form-block">
                        <div className="form-box">
                            <div className="reset-form p-4 row justify-content-center align-items-center">
                                <form className="reset-password-form">
                                    <h4 className="mb-3 text-center">Reset Your password</h4>
                                    <div className="form-input">
                                        <label className="ps-1 mb-2">Email :</label>
                                        <input type="email" placeholder="Email Address" value={email} required />
                                    </div>
                                    <div className="form-input">
                                        <label className="ps-1 mb-2">new password :</label>
                                        <input type="password" placeholder="Enter your new password" value={password} required />
                                    </div>
                                    <div className="form-input">
                                        <input type="password" placeholder="Re-enter your new password" value={password1} required />
                                    </div>
                                    <div className="mb-3 d-flex justify-content-center align-items-center">
                                        <button type="submit" className="btn" onClick={handleSubmit}
                                            disabled={loading}
                                        >{loading ? 'Loading...' : 'Update'}</button>
                                    </div>
                                    <div className="text-center mb-5">
                                        Already have password
                                        <Link to="/" className="login-link" > Login here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Register;