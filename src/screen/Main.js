import React from "react";
import "../assets/css/main.css";
import Map from "../assets/img/map.png";
function Main() {
    return (
        <>
            <div className="markup-home">
                <div className="cards-container">
                    <div className="card pink">
                        <div className="content">
                            <h4>New Orders</h4>
                            <h2>3,243</h2>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "40%" }}></div>
                            </div>
                            <span className="percentage">12.5% ↑</span>
                        </div>
                        <div className="icon"><i class="fa-solid fa-cart-shopping"></i></div>
                    </div>

                    <div className="card pink">
                        <div className="content">
                            <h4>Customers</h4>
                            <h2>15.07k</h2>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "40%" }}></div>
                            </div>
                            <span className="percentage">9.23% ↑</span>
                        </div>
                        <div className="icon"><i class="fa-solid fa-users-line"></i></div>
                    </div>

                    <div className="card pink">
                        <div className="content">
                            <h4>Ticket Resolved</h4>
                            <h2>578</h2>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "10%" }}></div>
                            </div>
                            <span className="percentage">10% ↑</span>
                        </div>
                        <div className="icon"><i class="fa-solid fa-laptop"></i></div>
                    </div>

                    <div className="card pink">
                        <div className="content">
                            <h4>Revenue Today</h4>
                            <h2>$11.61k</h2>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "20%" }}></div>
                            </div>
                            <span className="percentage">2.5% ↑</span>
                        </div>
                        <div className="icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                    </div>
                    <div className="card pink">
                        <div className="content">
                            <h4>New Users</h4>
                            <h2>578</h2>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "10%" }}></div>
                            </div>
                            <span className="percentage">10% ↑</span>
                        </div>
                        <div className="icon"><i class="fa-solid fa-users"></i></div>
                    </div>
                    <div className="card pink">
                        <div className="content">
                            <h4>Total Orders</h4>
                            <h2>15.07k</h2>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "40%" }}></div>
                            </div>
                            <span className="percentage">9.23% ↑</span>
                        </div>
                        <div className="icon"><i class="fa-solid fa-cart-flatbed-suitcase"></i></div>
                    </div>
                </div>
                <div className="recent-order">
                    <div className="container">
                        <h3>Recent Orders</h3>
                        {/* <form>
						<div className="row search">
							<div className="col-3">
								<div className="field">
									<input
										type="text"
										className="form-control"
										name="name"
										placeholder="Select Student"
										onChange=""
									/>
								</div>
							</div>
						</div>
					</form> */}
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                {/* <th colpan={5}>Recent Invoice</th> */}
                                <tr>
                                    <th>Id</th>
                                    <th>Date</th>
                                    <th>Product</th>
                                    <th>Coustomer Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Payment Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2/2/24</td>
                                    <td>Mobile</td>
                                    <td>Wasid</td>
                                    <td>Wasid@gmail.com</td>
                                    <td>992233344</td>
                                    <td>Delhi</td>
                                    <td>Online</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2/2/24</td>
                                    <td>Mobile</td>
                                    <td>Wasid</td>
                                    <td>Wasid@gmail.com</td>
                                    <td>992233344</td>
                                    <td>Delhi</td>
                                    <td>Online</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>2/2/24</td>
                                    <td>Mobile</td>
                                    <td>Wasid</td>
                                    <td>Wasid@gmail.com</td>
                                    <td>992233344</td>
                                    <td>Delhi</td>
                                    <td>Online</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>2/2/24</td>
                                    <td>Mobile</td>
                                    <td>Wasid</td>
                                    <td>Wasid@gmail.com</td>
                                    <td>992233344</td>
                                    <td>Delhi</td>
                                    <td>Online</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2/2/24</td>
                                    <td>Mobile</td>
                                    <td>Wasid</td>
                                    <td>Wasid@gmail.com</td>
                                    <td>992233344</td>
                                    <td>Delhi</td>
                                    <td>Online</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>2/2/24</td>
                                    <td>Mobile</td>
                                    <td>Wasid</td>
                                    <td>Wasid@gmail.com</td>
                                    <td>992233344</td>
                                    <td>Delhi</td>
                                    <td>Online</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <h4 className="text-center" style={{ font: "14px;" }}>2025 © Tasmia. Crafted by <i class="fa-regular fa-heart"></i> wasid</h4> */}
                <div className="visit-country">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h3>Visitors by Countries</h3>
                                <div className="map">
                                    <img src={Map} alt="" />
                                </div>
                            </div>
                            <div className="col-6">
                                <h3>Country List</h3>
                                <table className="table  table-dark">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Country</th>
                                            <th>Visit</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>India</td>
                                            <td>112</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>India</td>
                                            <td>112</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>India</td>
                                            <td>112</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-invoice">
                    <div className="container">
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Invoice#</th>
                                    <th>Customer Name</th>
                                    <th>Status</th>
                                    <th>Due</th>
                                    <th>Ammount</th>
                                </tr>
                                <tr>
                                    <td>INV-001001</td>
                                    <td>Mario Flores</td>
                                    <td>Paid</td>
                                    <td>10 March 2017</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>INV-001001</td>
                                    <td>Mario Flores</td>
                                    <td>Paid</td>
                                    <td>10 March 2017</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td>INV-001001</td>
                                    <td>Mario Flores</td>
                                    <td>Paid</td>
                                    <td>10 March 2017</td>
                                    <td>1200</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;