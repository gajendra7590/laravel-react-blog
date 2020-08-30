import React from 'react'

function Profile() {
    return (
        <React.Fragment>
            <div className="row">
					<div className="col-md-12">
						<div className="in_profile_box">
							<div className="row">
								<div className="col-md-12">
									<div className="in_add_insp_heading float_left">
										<h3>My Profile Settings</h3>
									</div>
								</div>
								<div className="col-md-12">
									<div className="in_profile_tabs_box float_left">
										<ul className="nav nav-pills">        
											<li className="nav-item"><a href="#profile" className="nav-link active" data-toggle="pill">My Profile</a></li>
											<li className="nav-item"><a href="#password" className="nav-link" data-toggle="pill">Change Password</a></li>
											<li className="nav-item"><a href="#setting" className="nav-link" data-toggle="pill">Setting</a></li>
										</ul>
									</div>
								</div>
								<div className="col-md-12">
									<div className="tab-content st_profile_tab_co float_left">
										<div className="tab-pane active" id="profile">
											<div className="row">
												<div className="col-md-9">
													<div className="row">
														<div className="col-md-6">
															<div className="in_setting_input_wrapper float_left">
																<label>First Name</label>
																<input type="text" placeholder="Cristhoper" />
															</div>
														</div>
														<div className="col-md-6">
															<div className="in_setting_input_wrapper float_left">
																<label>Last Name</label>
																<input type="text" placeholder="Gibson" />
															</div>
														</div>
														<div className="col-md-6">
															<div className="in_setting_input_wrapper float_left">
																<label>Email</label>
																<input type="email" placeholder="cristhoper@gmail.com" />
															</div>
														</div>
														<div className="col-md-6">
															<div className="in_setting_input_wrapper float_left">
																<label>Contact #</label>
																<input type="phone" placeholder="9874563210" />
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-3">
													<div className="avatar-edit">
														<div className="btnnn">
															<img src="../admin-theme/images/thumbnails/user1.png" alt="img" />
														</div>
														<div className="avatar-preview">
															<div id="imagePreview"></div>
														</div>
														<div className="pr_user_img_cont_wrapper">
															<label htmlFor="imageUpload">Change Profile Image</label>
															<input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
														 </div>
													</div>
												</div>
												<div className="col-md-12">
													<div className="in_profile_bot_btn float_left">
														<button className="in_btn">Update Profile</button>
													</div>
												</div>
											</div>
										</div>
										<div className="tab-pane fade" id="password">
											<div className="row">
												<div className="col-md-6">
													<div className="row">
														<div className="col-md-12">
															<div className="in_setting_input_wrapper float_left">
																<label>Current Password</label>
																<input type="password" placeholder="*****" />
															</div>
														</div>
														<div className="col-md-12">
															<div className="in_setting_input_wrapper float_left">
																<label>New Password</label>
																<input type="password" placeholder="*****" />
															</div>
														</div>
														<div className="col-md-12">
															<div className="in_setting_input_wrapper float_left">
																<label>Retype New Password</label>
																<input type="password" placeholder="*****" />
															</div>
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="in_profile_pass_cont float_left">
														<h6>Password Requirement</h6>
														<p>These passwords are at least 8 characters long. Along with upper and 
															lower-case characters, they require multiple occurrences of digits 
															</p>
													</div>
												</div>
												<div className="col-md-12">
													<div className="in_profile_bot_btn float_left">
														<button className="in_btn">Update Password</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> 
        </React.Fragment>
    )
}

export default Profile
