"use client";
import React, { useEffect } from "react";

const PsyTodayBadge = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://member.psychologytoday.com/verified-seal.js";
		script.setAttribute("data-badge", "13");
		script.setAttribute("data-id", "384337");
		script.setAttribute(
			"data-code",
			"aHR0cHM6Ly93d3cucHN5Y2hvb2d5dG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
		);
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [""]);
	return (
		<div>
			<a href="https://www.psychologytoday.com/profile/384337" className="sx-verified-seal"></a>
		</div>
	);
};

export default PsyTodayBadge;
