import FormTemplate from "./FormTemplate";
import { v4 } from 'uuid';
import React from 'react';
import PropTypes from 'prop-types';

function NewMerchForm(props){

	function handleNewMerchFormSubmit(event){
		event.preventDefault();
		props.onNewMerchCreation({
			name: event.target.name.value,
			price: event.target.price.value,
			onStock: event.target.onStock.value,
			id: v4()
		});
	}

	return (
		<FormTemplate formSubmissionHandler={handleNewMerchFormSubmit} buttonText="Display new Merch" />
	)
}

NewMerchForm.propTypes = {
	onNewMerchCreation: PropTypes.func
}

export default NewMerchForm;