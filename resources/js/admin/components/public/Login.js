import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'; 
import AxiosCall from '../../api-axios/Common';

function Login() {
    const { register, handleSubmit, errors } = useForm();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const loginInputChange = (event) => { 
        let inpt = event.target.name;
        let value = event.target.value; 
        setLoginData({
            ...loginData,
            [inpt] : value
        }); 
    }

    const loginSubmit = (event) => {
        event.preventDefault();
        alert('ddd')
    }

    return (
        <React.Fragment>
            <div className="gd_login_field_box float_left">
                <div className="row">
                    <div className="col-md-12">
                        <div className="gd_login_heading">
                            <h3>Sign In</h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <form action="" onSubmit={handleSubmit(loginSubmit)} className="form" encType="multipart/form-data"> 
                            <div className="form-group">
                                <label className="form-label" htmlFor="first">
                                    Email
                                </label>
                                <input
                                    id="first"
                                    name="email" 
                                    onChange={ loginInputChange } 
                                    value={ loginData.email }
                                    ref={register({ required: true })}
                                    className="form-input"
                                    type="email"
                                />
                                <span className="text-danger">
                                    {errors.email && 'Email address field is required.'}
                                </span>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="last">
                                    Password
                                </label>
                                <input
                                    id="last"
                                    name="password"
                                    onChange={ loginInputChange } 
                                    value={ loginData.password }
                                    ref={register({ required: true })}
                                    className="form-input"
                                    type="password"
                                />
                                <span className="text-danger">
                                    {errors.password && 'Password field is required.'}
                                </span>
                            </div>
                            <div className="gd_login_checbox">
                                <input
                                    type="checkbox"
                                    id="select_all"
                                    name="select_all"
                                />
                                <label htmlFor="select_all">
                                    Keep me signed in
                                </label>
                            </div>
                            <div className="gd_login_btn">
                                <button type="submit">Sign In</button>
                                <Link
                                    to="/admin/forgot-password"
                                    href="javascript:void(0);"
                                    className="pr_forgot"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
