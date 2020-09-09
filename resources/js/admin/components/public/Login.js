import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'; 
import Axios from '../../api-axios/Common';
import { set } from "lodash";

function Login() {
    const { register, handleSubmit, errors } = useForm();
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [errorsObj, addError] = useState({ message: "", type: "" });
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const loginInputChange = (event) => {
        let inpt = event.target.name;
        let value = event.target.value;
        setLoginData({
            ...loginData,
            [inpt]: value
        });
    }

    const loginSubmit = (e) => {
        setLoading (true);
        Axios.POST('admin/login', loginData)
            .then((result) => {
                setLoading(false);
                if ((typeof (result.status) != '') && (result.status == true)) {
                    addError({
                        ...errorsObj,
                        message: result.message,
                        type: 'alert-success'
                    }); 
                    localStorage.setItem('ADMIN_SESSION',JSON.stringify({
                        'token' : result.token.access_token,
                        'adminRole' : result.role,
                        'adminUser' : result.current_user
                    }));  
                    
                    setTimeout( ()=> {  window.location.href = '/admin/dashboard'; },500)
                   } else if ((typeof (result.status) != '') && (result.status == false)) {
                    addError({
                        ...errorsObj,
                        message: result.message,
                        type: 'alert-danger'
                    });
                    setTimeout(() => {
                        addError({
                            ...errorsObj,
                            message: '',
                            type: ''
                        });
                    }, 3000)
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)

            });
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
                        {
                            (errorsObj.message != '')
                                ? (<div className={`alert ${errorsObj.type}`} role="alert">
                                    {errorsObj.message}
                                </div>)
                                : ''
                        }
                        <form action="" onSubmit={handleSubmit(loginSubmit)} className="form" encType="multipart/form-data">
                            <div className="form-group">
                                <label className="form-label" htmlFor="first">
                                    Email
                                </label>
                                <input
                                    id="first"
                                    name="email"
                                    onChange={loginInputChange}
                                    value={loginData.email}
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
                                    onChange={loginInputChange}
                                    value={loginData.password}
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
                                {
                                    (loading == false) ?
                                        <button type="submit">Sign In</button>
                                        : <button type="submit" style={{ fontSize: '18px'}}>
                                            <span className="spinner-border spinner-border-sm" style={{ marginRight: '11px'}} role="status" aria-hidden="true"></span>
                                                Signing in
                                        </button>
                                }
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
