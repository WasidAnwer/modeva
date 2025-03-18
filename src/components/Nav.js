import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Steps.css";

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
				<i className="fa-solid fa-list"></i>
			</div>
			<ul className="navlist">
				<li className={isActive("/Home") ? "active" : ""}>
					<Link to="/">
						<i className="fa-solid fa-house"></i>
						{!isCollapsed && "Home"}
					</Link>
				</li>
				<li className={isActive("/Products") ? "active" : ""} onClick={() => toggleDropdown('Products')}>
					<Link to="/">
						<i className="fa-solid fa-shirt"></i>
						{!isCollapsed && "Products"}
					</Link>
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
				<li className={isActive("/Category") ? "active" : ""} onClick={() => toggleDropdown('Category')}>
					<Link to="/Category">
						<i className="fa-solid fa-layer-group"></i>
						{!isCollapsed && "Category"}
					</Link>
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
				<li className={isActive("/Users") ? "active" : ""} onClick={() => toggleDropdown('Users')}>
					<Link to="/Users">
						<i className="fa-solid fa-users"></i>
						{!isCollapsed && "Users"}
					</Link>
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
				<li className={isActive("/Orders") ? "active" : ""} onClick={() => toggleDropdown('Users')}>
					<Link to="/Orders">
						<i className="fa-solid fa-bag-shopping"></i>
						{!isCollapsed && "Orders"}
					</Link>
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
				<li className={isActive("/Inventery") ? "active" : ""}>
					<Link to="/Inventery">
						<i className="fa-solid fa-cube"></i>
						{!isCollapsed && "Inventery"}
					</Link>
				</li>
				<li className={isActive("/Setting") ? "active" : ""}>
					<Link to="/Setting">
						<i className="fa-solid fa-gear"></i>
						{!isCollapsed && "Setting"}
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
