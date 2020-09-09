import React, { Component } from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';

class TopHeader extends Component {
    constructor(props) {
      super(props) 
      this.state = {
         
      }; 
      this.profileToggle = this.profileToggle.bind(this)
    };

    profileToggle(e){
        $(".br_profile_list").slideToggle();
		e.stopPropagation();
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="gd_fav_right_top_header float_left">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-6">
                            <div className="in_responsive_logo d-block d-sm-block d-md-block d-lg-none d-xl-none">
                                <Link to="/admin/dashboard">React Blog</Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-6 col-6">
                            <div className="gd_fev_toggle d-block d-sm-block d-md-block d-lg-none d-xl-none">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                            <div className="in_profile_box_wrapper">
                                <span onClick={ e => this.profileToggle(e) } className="br_profile_toggle">
                                    <img
                                        src="../admin-theme/images/thumbnails/user_single.png"
                                        alt="img"
                                    />
                                    <small>Arya Stark</small>
                                </span>
                                <ul className="br_profile_list">
                                    <li>
                                        <Link to="/admin/profile">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/profile">
                                           Change Password
                                        </Link>
                                    </li> 
                                    <li>
                                        <a href="">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TopHeader;