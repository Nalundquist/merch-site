import React from 'react';
import PropTypes from 'prop-types';

function FormTemplate(props) {
	const formStyle= {
		width: '68%',
		margin: '25px',
		padding: '18px',
		border: '2px solid grey'
	}
	return (
		<div style={formStyle}>
			<form onSubmit={props.formSubmissionHandler}>
				<input
					type="text"
					name="name"
					placeholder='Item Name' />
				<input
					type="text"
					name="price"
					placeholder='Item Price' />
				<input
					type="number"
					name="onStock"
					placeholder='Amount purchased/in stock' />
				<button type='submit'>{props.buttonText}</button>
			</form>
		</div>
	)
}

FormTemplate.propTypes = {
	formSubmissionHandler: PropTypes.func,
	buttonText: PropTypes.string
}

export default FormTemplate;