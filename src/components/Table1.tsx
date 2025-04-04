import { FC } from "react";

const Table1: FC = () => (
	<table>
		<caption>Common Biking Styles and Their Characteristics</caption>
		<tr>
			<th>Bike Type</th>
			<th>Terrain</th>
			<th>Equipment Needed</th>
		</tr>
		<tr>
			<td>Mountain Bike</td>
			<td>Rough trails, dirt paths</td>
			<td>Suspension, wide tires, helmet</td>
		</tr>
		<tr>
			<td>Road Bike</td>
			<td>Paved roads, highways</td>
			<td>Narrow tires, lightweight frame, cycling shorts</td>
		</tr>
		<tr>
			<td>Hybrid</td>
			<td>Mixed urban and light trails</td>
			<td>Medium tires, upright position, lights</td>
		</tr>
		<tr>
			<td>BMX</td>
			<td>Skate parks, jumps</td>
			<td>Sturdy frame, pegs, protective gear</td>
		</tr>
	</table>
);

export default Table1;
