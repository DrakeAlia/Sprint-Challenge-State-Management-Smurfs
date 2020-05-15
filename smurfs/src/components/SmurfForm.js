import React, { useContext, useState } from 'react';
import { SmurfContext } from './SmurfContext';

// user submits form 
const SmurfForm = () => {
	const { addSmurf } = useContext(SmurfContext);

	const [ newSmurf, setNewSmurf ] = useState({
		name: '',
		age: '',
		height: '',
		id: ''
	});

	const handleChanges = (e) => {
		const smurf = e.target.name;
		setNewSmurf({
			...newSmurf,
			[smurf]: e.target.value,
			id: Date.now()
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addSmurf(newSmurf);
    };
    
// info displayed 
	return (
		<div>
			<form>
				<input name="name" type="text" placeholder="name" onChange={handleChanges} /> <br />
				<input name="age" type="text" placeholder="age" onChange={handleChanges} /> <br />
				<input name="height" type="text" placeholder="height" onChange={handleChanges} /> <br />
				<button class="button" type="submit" onClick={handleSubmit}>
					Add Smurf
				</button>
			</form>
		</div>
	);
};

export default SmurfForm;
