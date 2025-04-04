import { FC } from "react";
import Image1 from "../assets/image1.jpg";

const Hobby1: FC = () => {
	return (
		<>
			<p>
				Biking is something that Ryan likes to do occasionally to detress from
				his day to day life. He usually pursues local trails around where he
				lives.
			</p>
			<img src={Image1} alt="Biking image" />
		</>
	);
};

export default Hobby1;
