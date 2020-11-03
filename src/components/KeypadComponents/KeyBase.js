import React, { useState } from "react";

import "./KeyBase.css";
const KeyBase = (props) => {
	const { value, onClick, colored } = props;
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		// 	const cover =document.querySelector(".cover")
		// 	cover.classList.add("click-cover");
		// 	setTimeout(()=>{
		// 		cover.classList.remove("click-cover");
		// 	},150)
		setClicked(true);
		setTimeout(() => {
			setClicked(false);
		}, 150);
		onClick();
	};

	return (
		<div className="keybase" onClick={handleClick}>
			<div className={clicked && "click-cover"}></div>
			<p className={colored ? "blue color" : "default"}>{value}</p>
		</div>
	);
};

export default KeyBase;
