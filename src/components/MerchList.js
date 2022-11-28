import React from 'react';
import PropTypes from 'prop-types';
import Merch from './Merch';

function MerchList(props){
	const merchStyle = {
		width: '76%',
		display: 'flex',
		flexFlow: 'column wrap',
		padding: '20px',
		margin: '15px',
		justifyContent: 'space-around'
	}

	return(
		<div style={merchStyle}>
			{Object.values(props.merchList).map((merch) => 
				<Merch
				name={merch.name}
				price={merch.price}
				onStock={merch.onStock}
				id={merch.id}
				key={merch.key}/>
			)}
		</div>
	)
}

MerchList.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string,
	onStock: PropTypes.number,
	merchList: PropTypes.object
}

export default MerchList;