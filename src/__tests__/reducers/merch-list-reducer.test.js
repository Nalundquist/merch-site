import merchListReducer from '../../reducers/merch-list-reducer'

describe('merchListReducer', () => {
	
	let action;

	const merchList = {
		1: {
			name: 'T-shirt',
			price: '$20',
			onStock: 10,
			id: 1
		}, 2: {
			name: 'Drink Coozie',
			price: '$4',
			onStock: 175,
			id: 2
		}
	}

	const newMerch = {
		name: 'T-shirt',
		price: '$20',
		onStock: 10,
		id: 1
	}
  
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(merchListReducer({}, {type:null})).toEqual({});
  });

	test('Should add new merch to list of displayed merchandise', () => {
		const {name, price, onStock, id} = newMerch
		action = {
			type: 'ADD_MERCH',
			name: name,
			price: price,
			onStock: onStock,
			id: id
		};
		expect(merchListReducer({}, action)).toEqual({
			[id] : {
				name: name,
				price: price,
				onStock: onStock,
				id: id
			}
		});
	});

	test('Should remove merch from display if requested', () => {
		action = {
			type: 'DELETE_MERCH',
			id: 2
		};
		expect(merchListReducer(merchList, action)).toEqual({
			1: {
				name: 'T-shirt',
				price: '$20',
				onStock: 10,
				id: 1 
			}
		})
	})
})