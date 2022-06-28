import React from "react";
import StyledBrewerButton from "./styles/BrewerButton.styled";
import { ReactComponent as IconV60 } from "./../assets/v60-icon.svg";
import { ReactComponent as IconAero } from "./../assets/aero-icon.svg";

function BrewerButton(props) {
	const iconStyle = {
		width: "60%",
		height: "60%",
		margin: "auto",
	};

	return (
		<StyledBrewerButton>
			{props.brewer === "V60" && <IconV60 style={iconStyle} />}
			{props.brewer === "aero" && <IconAero style={iconStyle} />}
		</StyledBrewerButton>
	);
}

export default BrewerButton;
