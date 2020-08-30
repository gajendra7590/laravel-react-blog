import React from 'react'

function RighSide() {
    return ( 
            <div className="gd_login_right_wrapper">
					<div className="in_login_map_marker">
						<ul>
							<li>
								<span><img src="../admin-theme/images/thumbnails/user_single.png" /></span>
							</li>
							<li>
								<span><img src="../admin-theme/images/thumbnails/user_single.png" /></span>
							</li>
						</ul>
						<div className="in_login_marker_cont_box">
									<div className="row">
										<div className="col-md-12">
											<div className="in_lg_id_wrapper">
												<div className="in_lg_left_img">
													<img src="../admin-theme/images/thumbnails/user_about.png" alt="img" />
												</div>
												<div className="in_lg_left_img_cont">
													<h4>Ivanov N.</h4>
													<p>Fadeeva St, 34/2</p>
													<h6>Distance <small>- 4.3 km</small></h6>
												</div>
											</div>
											<div className="in_lg_id_right_wrapper">
												<a href="#">Unselect</a>
											</div>
										</div>
										<div className="col-md-12">
											<div className="in_lg_btns_wrapper float_left">
												<div className="row">
													<div className="col-md-7">
														<div className="in_lg_bot_btns_wrapper float_left">
															<p><span>34</span> Completed</p>
														</div>
													</div>
													<div className="col-md-5">
														<div className="in_lg_bot_btns_wrapper in_lg_bot_btns_wrapper2 float_left">
															<a href="#">Send Req</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
					</div>
					<div className="in_login_map_bot_content">
						<h4>Used vehicle inspection is very important for every vehicle<br /> that is running on road.</h4>
						<p>It is necessary to take all the measures that ensure yours and your car’s safety and doing an 
                            auto inspection after a certain period of time certainly helps.</p>
					</div>
				</div> 
    )
}

export default RighSide
