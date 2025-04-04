import { FC } from "react";
import "../List.css";

const list1: FC = () => {
	return (
		<>
			<p>Reasons He Likes Biking:</p>
			<ol>
				<li>Great exercise</li>
				<li>Freedom to explore new places and trails</li>
				<li>Mental health benefits and stress reduction</li>
				<li>It's a fun way to spend time with friends and family</li>
				<li>It can be used to commute</li>
			</ol>
		</>
	);
};

export default list1;
