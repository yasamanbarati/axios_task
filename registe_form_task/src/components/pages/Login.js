import React, { Fragment, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

// Data
const data = [
    {
        email: 'admin@gmail.com',
        password: '12345678'
    },
    {
        email: 'admin1@gmail.com',
        password: '88888888'
    },
]

const Login = () => {


    // State 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [data, setData] = useState([]);

    // Send Data
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        console.log(user);

        // axios.get('http://localhost:5000/data').then(result => {

        //     setData(result.data.data);

            if (email.trim().length === 0 || password.trim().length === 0) {
                alert('ایمیل و پسورد را وارد کنید')
            } else {
                const result = data.some((item) => item.email === email && item.password === password)

                if (result) {
                    alert('خوش آمدید')
                } else {
                    alert('لطفا اطلاعات را بررسی کنید')
                }
            }
        // }).catch(err => {
        //     console.log(err);
        // })
    }

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
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        autoComplete="off"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        tabIndex={10}
                                        required />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-key" /></span>
                                    <input
                                        type="password"
                                        value={password}
                                        placeholder="Password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        required />
                                </div>
                                <div className="mb-2 d-flex justify-content-center">
                                    <button type="submit" onClick={handleSubmit} className="btn btn-block px-4 py-2 mt-1">
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
            </div >
        </Fragment >
    )
}

export default Login