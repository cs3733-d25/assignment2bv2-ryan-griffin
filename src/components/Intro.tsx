import { FC } from "react";

const Intro: FC<{ names: string[] }> = ({ names }) => (
	<p>
		Hello, our names are {names[0]} and {names[1]}.
	</p>
);

export default Intro;
