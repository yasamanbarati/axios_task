import React, { Fragment , useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           email : '' ,
           password : '',
           redirectToReferrer : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event){
            this.setState({
                [event.target.name] : event.target.value
                
            });
    }
    handleSubmit(event){
            event.preventDefault();

            const user = {
            email : this.state.email,
            password : this.state.password
            };
            
      if(this.state.email && this.state.password)      
        {
     axios.post('http://localhost:5000/data',user)
     .then((response) =>
        { 
            let userresponse = response;
            console.log(userresponse.data);
            if(userresponse){
            sessionStorage.setItem('data',JSON.stringify(userresponse));
            this.setState({redirectToReferrer: true});
            alert("welcome");
            }
            alert("welcome");
            
        },this)
        .catch((error) => alert(error))
                   
    }
}
    render(){
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
                                    <input type="email" placeholder="Email Address" autoComplete="off" onChange={this.handleChange} tabIndex={10} required />
                                </div>
                                <div className="form-input">
                                    <span><i className="fa fa-key" /></span>
                                    <input type="password" placeholder="Password" onChange={this.handleChange}required />
                                </div>
                                <div className="mb-2 d-flex justify-content-center">
                                    <button type="submit" onChange={this.handleSubmit} className="btn btn-block px-4 py-2 mt-1">
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
        )
    }
}