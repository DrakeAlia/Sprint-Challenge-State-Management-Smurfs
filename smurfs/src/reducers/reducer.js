// importing cases 
import { FETCHSMURF } from '../actions/action';
import { FETCHPASS } from '../actions/action';
import { FETCHMISS } from '../actions/action';
import { ADDSMURF } from '../actions/action';
import { ADDPASS } from '../actions/action';
import { ADDMISS } from '../actions/action';

const initialState = {
	messge: '',
	smurfs: []
};
// fetching api data
export const Reducer = (state = initialState, action) => {
	console.log('ACTION', action.type, action.payload);
	switch (action.type) {
		case FETCHSMURF:
			return { ...state, message: action.payload };
		case FETCHPASS:
			return { message: '', smurfs: action.payload };
		case FETCHMISS:
			console.log(action.payload);
			return { ...state, message: action.payload };
		case ADDSMURF:
			return { ...state, message: action.payload };
		case ADDPASS:
			return { message: 'Smurf added', smurfs: action.payload };
		case ADDMISS:
			console.log(action.payload);
			return { ...state, message: action.payload };
		default:
			return state;
	}
};
