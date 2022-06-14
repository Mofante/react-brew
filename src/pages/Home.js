import React from "react";
import MainContainer from "./../components/styles/MainContainer.styled";
import Header from "../components/styles/Header.styled";
import BrewerButton from "../components/styles/BrewerButton.styled";

function Home() {
	return (
		<MainContainer>
			<Header>What are You Brewing?</Header>
			<BrewerButton />
			<BrewerButton />
		</MainContainer>
	);
}

export default Home;
