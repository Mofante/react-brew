import React from "react";
import MainContainer from "./../components/styles/MainContainer.styled";
import Header from "../components/styles/Header.styled";
import BrewerButton from "../components/BrewerButton";

function Home() {
	return (
		<MainContainer>
			<Header>What are You Brewing?</Header>
			<BrewerButton brewer="V60" />
			<BrewerButton brewer="aero" />
		</MainContainer>
	);
}

export default Home;
