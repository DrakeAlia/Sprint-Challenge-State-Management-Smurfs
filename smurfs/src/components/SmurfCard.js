import React from 'react';

// strech goal
// const DeleteSmurf = () => {
//  alert('Smurf is gone...')
// }

// passing props
const SmurfCard = (props) => {
	return (
		<div>
			<h1>{props.smurf.name}</h1>
			<h2>{props.smurf.age}</h2>
			<h3>{props.smurf.height}</h3>
		</div>
	);
};

export default SmurfCard;
