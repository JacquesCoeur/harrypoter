import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center mt-5 title text-light">
		<h1>Hogwarts Houses</h1>
			<div className="row row-cols-1 row-cols-md-4 g-4">
	<div className="col">
		<div className="cardgry">
		<Link to="/housechars">
		<img src= {"https://storage.googleapis.com/minalima/2019/02/large-gryffindor-house-crest-poster-scaled-1300x1300.jpg"} className="card-img-top"/>
		</Link>
		<div className="card-body">
			<h5 className="card-title text-light">"We'll teach all those with brave deeds to their name."</h5>

		</div>
		</div>
	</div>
	<div className="col">
		<div className="cardsly">
		<Link to="/housechars2">
		<img src= {"https://storage.googleapis.com/minalima/2019/03/large-slytherin-house-crest-poster-scaled-1300x1300.jpg"} className="card-img-top"/>
		</Link>
		<div className="card-body">
			<h5 className="card-title text-light">"We'll teach just those whose ancestry's purest"</h5>
		</div>
		</div>
	</div>
	<div className="col">
		<div className="cardhuf">
		<Link to="/housechars3">
		<img src= {"https://storage.googleapis.com/minalima/2019/02/large-hufflepuff-house-crest-poster-scaled-1300x1300.jpg"} className="card-img-top"/>
		</Link>
		<div className="card-body">
			<h5 className="card-title text-light">"I'll teach the lot and treat them just the same"</h5>
		</div>
		</div>
	</div>
	<div className="col">
		<div className="cardrav">
		<Link to="/housechars4">
		<img src= {"https://storage.googleapis.com/minalima/2019/02/option-1-gallery-02-ravenclaw-house-crest-poster-scaled-1000x1000.jpg"} className="card-img-top"/>
		</Link>
		<div className="card-body">
			<h5 className="card-title text-light">"Wit beyond measure is man's greatest treasure"</h5>

		</div>
		</div>
	</div>
	</div>
	</div>
);
