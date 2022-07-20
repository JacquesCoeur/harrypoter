import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Housechars } from "./views/housechars";
import { Housechars2 } from "./views/housechars2";
import { Housechars3 } from "./views/housechars3";
import { Housechars4 } from "./views/housechars4";
import { Character } from "./views/character";
import { Character2 } from "./views/character2";
import { Character3 } from "./views/character3";
import { Character4 } from "./views/character4";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/Single/:theid">
							<Single />
						</Route>
						<Route exact path="/housechars">
							<Housechars/>
						</Route>
						<Route exact path="/housechars2">
							<Housechars2/>
						</Route>
						<Route exact path="/housechars3">
							<Housechars3/>
						</Route>
						<Route exact path="/housechars4">
							<Housechars4/>
						</Route>
						<Route exact path="/character/:theid">
							<Character/>
						</Route>
						<Route exact path="/character2/:theid">
							<Character2/>
						</Route>
						<Route exact path="/character3/:theid">
							<Character3/>
						</Route>
						<Route exact path="/character4/:theid">
							<Character4/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
