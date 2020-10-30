import React from "react";

import "./KeyBase.css";
const KeyBase = (props) => {
	const { value, onClick, colored } = props;

	return (
		<div className="keybase" onClick={onClick}>
			<p className={colored ? "blue" : "default"}>{value}</p>
		</div>
	);
};

export default KeyBase;
