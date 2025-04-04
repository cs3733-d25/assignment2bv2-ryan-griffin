import { FC } from "react";

const Form: FC = () => (
	<>
		<h2>Biking Feedback Form</h2>
		<form>
			<div>
				<label htmlFor="name">Your Name:</label>
				<input type="text" id="name" name="name" />
			</div>

			<div>
				<label htmlFor="email">Email Address:</label>
				<input type="text" id="email" name="email" />
			</div>

			<div>
				<h3>Your Biking Experience:</h3>
				<label>
					<input type="checkbox" name="experience" value="mountain" /> Mountain
					Biking
				</label>
				<label>
					<input type="checkbox" name="experience" value="road" /> Road Cycling
				</label>
				<label>
					<input type="checkbox" name="experience" value="commuting" /> Bike
					Commuting
				</label>
			</div>

			<div>
				<h3>Biking Frequency:</h3>
				<label>
					<input type="radio" name="frequency" value="daily" /> Daily
				</label>
				<label>
					<input type="radio" name="frequency" value="weekly" /> Weekly
				</label>
				<label>
					<input type="radio" name="frequency" value="monthly" />
					Monthly
				</label>
			</div>

			<div>
				<label htmlFor="comments">Share your favorite biking experience:</label>
				<textarea id="comments" name="comments" rows={4} cols={50}></textarea>
			</div>

			<div>
				<label htmlFor="bike-type">Preferred Bike Type:</label>
				<select id="bike-type" name="bike-type">
					<option value="mountain">Mountain Bike</option>
					<option value="road">Road Bike</option>
					<option value="hybrid">Hybrid</option>
					<option value="bmx">BMX</option>
					<option value="electric">Electric Bike</option>
				</select>
			</div>

			<button type="submit">Submit</button>
		</form>
	</>
);

export default Form;
