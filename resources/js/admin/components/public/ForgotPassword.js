import React from 'react';
import { Link } from 'react-router-dom';


function ForgotPassword() {
    return (
        <React.Fragment>
            <div className="gd_login_field_box float_left">
                <div className="row">
                    <div className="col-md-12">
                        <div className="gd_login_heading">
                            <h3>Forgot password</h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <form action="" className="form">
                            <div className="form-group">
                                <label className="form-label" htmlFor="first">Email</label>
                                <input id="first" className="form-input" type="email" />
                            </div>
                            <div className="gd_login_btn">
                                <button type="submit">Send email</button>
                                <Link to="/admin/login" href="javascript:void(0);" className="back_to">Go back to sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
}

export default ForgotPassword
