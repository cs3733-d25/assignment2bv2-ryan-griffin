import "./App.css";
import Title from "./components/Title";
import Intro from "./components/Intro";
import Hobby1 from "./components/Hobby1";
import List1 from "./components/List1";
import Table1 from "./components/Table1";
import Form from "./components/Form";

function App() {
	return (
		<main>
			<Title />
			<Intro names={["Ryan", "Beruh"]} />
			<Hobby1 />
			<List1 />
			<Table1 />
			<Form />
		</main>
	);
}

export default App;
