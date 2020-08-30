import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="row">
					<div class="col-md-12">
						<div class="pr_dash_right_heading">
							<h3>Today's Overview</h3>
						</div>
						<div class="pr_dash_right_days">
							<ul>
								<li><a href="#">Today</a>
								</li>
								<li><a href="#">Month</a>
								</li>
								<li><a href="#">Year</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-12">
						<div class="row">
							<div class="col-md-8">
								<div class="row">
									<div class="col-md-12">
										<div class="pr_dash_process_box float_left">
											<h2>Total Inspections</h2>
											<img src="../admin-theme/images/thumbnails/chart1.jpg" alt="img" />
										</div>
									</div>
									<div class="col-xl-4 col-lg-6 col-md-6">
										<div class="pr_dash_process_box float_left">
											<div class="pr_dash_process_cont">
												<h2>TOTAL</h2>
												<h1>123,456</h1>
												<p>+ 3.4% Vs</p>
											</div>
											<div class="pr_dash_process_img">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.828 14.828">
													<g id="trending-up" transform="translate(1.414 1.414)">
														<path id="Path_473" data-name="Path 473" d="M23,6l-9.5,9.5-5-5L1,18" transform="translate(-1 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
														<path id="Path_474" data-name="Path 474" d="M17,6h6v6" transform="translate(-1 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
													</g>
												</svg>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-lg-6 col-md-6">
										<div class="pr_dash_process_box float_left">
											<div class="pr_dash_process_cont">
												<h2>INSPECTORS</h2>
												<h1>2,345</h1>
												<p class="pro_red">-3.48%</p>
											</div>
											<div class="pr_dash_process_img pr_dash_process_img2">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.828 14.828">
													<g id="trending-down" transform="translate(1.414 1.414)">
														<path id="Path_471" data-name="Path 471" d="M23,18,13.5,8.5l-5,5L1,6" transform="translate(-1 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
														<path id="Path_472" data-name="Path 472" d="M17,18h6V12" transform="translate(-1 -6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
													</g>
												</svg>
											</div>
										</div>
									</div>
									<div class="col-xl-4 col-lg-6 col-md-6">
										<div class="pr_dash_process_box float_left">
											<div class="pr_dash_process_cont">
												<h2>INSPECTIONS</h2>
												<h1>924</h1>
												<p>+3.48%</p>
											</div>
											<div class="pr_dash_process_img pr_dash_process_img3">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 24">
													<g id="dollar-sign" transform="translate(1 1)">
														<line id="Line_26" data-name="Line 26" y2="22" transform="translate(6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
														<path id="Path_470" data-name="Path 470" d="M17,5H9.5a3.5,3.5,0,0,0,0,7h5a3.5,3.5,0,1,1,0,7H6" transform="translate(-6 -1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
													</g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="pr_dash_righted_process_box float_left">
									<h2>Activity Insight</h2>
									<img src="../admin-theme/images/thumbnails/chart2.jpg" alt="img" />
								</div>
							</div>
						</div>
					</div>
				</div>
            </React.Fragment>
        )
    }
}
