import React, { Component } from "react";
import { Link } from 'react-router-dom';


class AuthorsAdd extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <div className="in_add_insp_box">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="in_add_insp_heading float_left">
                                        <h3>Add New Author</h3>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <form action="" className="form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cristhoper"
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cristhoper"
                                                    />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cristhoper"
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cristhoper"
                                                    />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cristhoper"
                                                    />
                                                </div> 
                                            </div>
                                            <div className="col-md-6">
                                                <div className="st_set_rep_wrapper float_left">
                                                    <label>First Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cristhoper"
                                                    />
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="in_ad_insp_btn_wrapper float_left">
                                                <ul>
                                                    <li>
                                                        <button
                                                            type="submit"
                                                            className="in_btn"
                                                        >
                                                            Submit
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            type="button"
                                                            className="in_btn"
                                                        >
                                                            <Link to="/admin/authors">Cancel</Link>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AuthorsAdd
