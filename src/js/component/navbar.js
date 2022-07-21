import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-dark mb-3 pe-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-light">Hogwarts Houses</span>
			</Link>
			<div className="ml-auto me-3">
				<div className="me-3">
					<div className="dropdown me-3 container">
					<button className="btn dropdown-toggle btn-light" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
					{store.favs.map((value,index)=>{
						return(
						<div className="container">
								<li className="row">
									<div className="col-9">{value}</div>
								<div className="col-2"
									onClick={() => {
										actions.deleteFavorites(value);
									}}>								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-x-lg"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
									/>
									<path
										fillRule="evenodd"
										d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
									/>
								</svg>
								</div>
								</li>

						</div>
						)})}
					</ul>
					</div>
				</div>

			</div>
		</nav>
	);
};
