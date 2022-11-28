const reducer = ( state = {}, action) => {
	const {name, price, onStock, id} = action;
	switch (action.type) { 
	case 'ADD_MERCH':
		return Object.assign({}, state, {
			[id]: {
				name: name,
				price: price,
				onStock: onStock,
				id: id
			}
		});
	case 'DELETE_MERCH':
		const newState = {...state};
		delete newState[id];
		return newState;
	default: 
		return state;
	}
};

export default reducer;