import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Nav.css";
import mark from "../assets/images/modevaLog.png";


function Nav({ isCollapsed, setIsCollapsed }) {

	const [activeDropdown, setActiveDropdown] = useState(null);
	const location = useLocation();

	const handleToggle = () => {
		setIsCollapsed(!isCollapsed);
	};

	const isActive = (path) => location.pathname === path;


	const toggleDropdown = (dropdown) => {

		setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
	};

	return (
		<div className={`navbars ${isCollapsed ? 'collapsed' : ''}`}>
			<div className="slid-nav" onClick={handleToggle}>
				{/* <div className="logo">
					<figure>
						<img src={mark} alt="" />
					</figure>
				</div> */}
				<i class="fa-solid fa-bag-shopping"></i>
			</div>
			<ul className="navlist">
				<li className={isActive("/Home") ? "active" : "norm-links"}>
					<Link to="/" className={isCollapsed ? "justify-content-center" : ""}>
						<i className="fa-solid fa-house"></i>
						<span className={isCollapsed ? "hidden" : ""}>Home</span>
					</Link>
				</li>
				<li className={`${isActive("/Products") || activeDropdown === "Products" ? "dropdown-open" : ""}`} onClick={() => toggleDropdown("Products")}>
					<i className="fa-solid fa-shirt"></i>
					<span className={isCollapsed ? "hidden" : ""}>Products</span>
					{!isCollapsed && <i className={`fa-solid ${activeDropdown === "Products" ? "fa-angle-up" : "fa-angle-down"}`}></i>}
					{activeDropdown === 'Products' && !isCollapsed && (
						<ul className="menu">
							<li className={isActive("/ProductList") ? "active" : ""}>
								<Link to="/ProductList">{"Product List"}</Link>
							</li>
							<li className={isActive("/ViewProduct") ? "active" : ""}>
								<Link to="/ViewProduct">{"View Product"}</Link>
							</li>
							<li className={isActive("/AddProduct") ? "active" : ""}>
								<Link to="/AddProduct">{"Add Product"}</Link>
							</li>
							<li className={isActive("/EditProduct") ? "active" : ""}>
								<Link to="/EditProduct">{"Edit Product"}</Link>
							</li>
						</ul>
					)}
				</li>
				<li className={`${isActive("/Category") || activeDropdown === "Category" ? "active dropdown-open" : ""}`} onClick={() => toggleDropdown("Category")}>
					<i className="fa-solid fa-layer-group"></i>
					<span className={isCollapsed ? "hidden" : ""}>Category</span>
					{!isCollapsed && <i className={`fa-solid ${activeDropdown === "Category" ? "fa-angle-up" : "fa-angle-down"}`}></i>}
					{activeDropdown === 'Category' && !isCollapsed && (
						<ul className="menu">
							<li className={isActive("/CategoryList") ? "active" : ""}>
								<Link to="/CategoryList">{"Category List"}</Link>
							</li>
							<li className={isActive("/ViewCategory") ? "active" : ""}>
								<Link to="/ViewCategory">{"View Category"}</Link>
							</li>
							<li className={isActive("/AddCategory") ? "active" : ""}>
								<Link to="/AddCategory">{"Add Category"}</Link>
							</li>
							<li className={isActive("/EditCategory") ? "active" : ""}>
								<Link to="/EditCategory">{"Edit Category"}</Link>
							</li>
						</ul>
					)}
				</li>
				<li className={`${isActive("/Users") || activeDropdown === "Users" ? "active dropdown-open" : ""}`} onClick={() => toggleDropdown("Users")}>
					<i className="fa-solid fa-users"></i>
					<span className={isCollapsed ? "hidden" : ""}>Users</span>
					{!isCollapsed && <i className={`fa-solid ${activeDropdown === "Users" ? "fa-angle-up" : "fa-angle-down"}`}></i>}
					{activeDropdown === 'Users' && !isCollapsed && (
						<ul className="menu">
							<li className={isActive("/UsersList") ? "active" : ""}>
								<Link to="/UserList">{"User List"}</Link>
							</li>
							<li className={isActive("/ViewUser") ? "active" : ""}>
								<Link to="/ViewUser">{"View User"}</Link>
							</li>
							<li className={isActive("/AddUser") ? "active" : ""}>
								<Link to="/AddUsers">{"Add User"}</Link>
							</li>
							<li className={isActive("/EditUser") ? "active" : ""}>
								<Link to="/EditUser">{"Edit User"}</Link>
							</li>
						</ul>
					)}
				</li>
				<li className={`${isActive("/Orders") || activeDropdown === "Orders" ? "active dropdown-open" : ""}`} onClick={() => toggleDropdown("Orders")}>
					<i className="fa-solid fa-bag-shopping"></i>
					<span className={isCollapsed ? "hidden" : ""}>Orders</span>
					{!isCollapsed && <i className={`fa-solid ${activeDropdown === "Orders" ? "fa-angle-up" : "fa-angle-down"}`}></i>}
					{activeDropdown === 'Orders' && !isCollapsed && (
						<ul className="menu">
							<li className={isActive("/OrderList") ? "active" : ""}>
								<Link to="/OrderList">{"Order List"}</Link>
							</li>
							<li className={isActive("/New Order") ? "active" : ""}>
								<Link to="/NewOrder">{"New Order"}</Link>
							</li>
							<li className={isActive("/Order Cancel") ? "active" : ""}>
								<Link to="/OrderCancel">{"Order Cancel"}</Link>
							</li>
							<li className={isActive("/Edit Order") ? "active" : ""}>
								<Link to="/EditOrder">{"Edit Order"}</Link>
							</li>
						</ul>
					)}
				</li>
				<li className={isActive("/Inventery") ? "active" : "norm-links"}>
					<Link to="/Inventery" className={isCollapsed ? "justify-content-center" : ""}>
						<i className="fa-solid fa-cube"></i>
						<span className={isCollapsed ? "hidden" : ""}>Inventery</span>
					</Link>
				</li>
				<li className={isActive("/Setting") ? "active" : "norm-links"}>
					<Link to="/Setting" className={isCollapsed ? "justify-content-center" : ""}>
						<i className="fa-solid fa-gear"></i>
						<span className={isCollapsed ? "hidden" : ""}>Setting</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
