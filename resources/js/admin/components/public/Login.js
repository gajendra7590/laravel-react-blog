import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
                        <form action="" className="form">
                            <div className="form-group">
                                <label className="form-label" htmlFor="first">Email</label>
                                <input id="first" className="form-input" type="email" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="last">Password</label>
                                <input id="last" className="form-input" type="password" />
                            </div>
                            <div className="gd_login_checbox">
                                <input type="checkbox" id="select_all" name="select_all" />
                                <label htmlFor="select_all">Keep me signed in</label>
                            </div>
                            <div className="gd_login_btn">
                                <button type="submit">Sign In</button>
                                <Link to="/admin/forgot-password" href="javascript:void(0);" className="pr_forgot">Forgot your password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default Login
