import React from 'react';
import PropTypes from "prop-types";

function Merch(props){
	const itemStyle = {
		border: '2px solid grey',
		margin: '15px',
		padding: '10px',
	}

	return(
		<div style={itemStyle}>
			<h3>{props.name} ----- {props.price}</h3>
			<p>In Stock: {props.onStock}</p>
		</div>
	)
}

Merch.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string, 
	onStock: PropTypes.number
}

export default Merch;