import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const contact = () => {
	return (
		<div>
			<Hero heading='My Contact' message='Please reach me @...' />
			<Contact />
		</div>
	);
};

export default contact;
