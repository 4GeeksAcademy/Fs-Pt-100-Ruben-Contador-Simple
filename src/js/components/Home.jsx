import React from "react";

import { Digitos } from "./digitos";


//create your first component
const Home = (props) => {
	return (
		<div className="counter">
			<Digitos digitosValue={<i className="fa-regular fa-clock"></i>}/>
			<Digitos digitosValue={props.five % 10}/>
			<Digitos digitosValue={props.four % 10}/>
			<Digitos digitosValue={props.three % 10}/>
			<Digitos digitosValue={props.two % 10}/>
			<Digitos digitosValue={props.one % 10}/>
		</div>
	);
};

export default Home;