import React from "react";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types"
// import Cart from "./Cart";

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null,
      editing: false
    }
  }
	
  handleClick = () => {
    if(this.state.selectedMerch != null){
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const {dispatch} = this.props;
    const {id, name, price, onStock} = newMerch;
    const action = {
      type: 'ADD_MERCH',
      id: id,
      name: name,
      price: price,
      onStock: onStock
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.formVisibleOnPage){
			currentlyVisibleState =
				<NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
				buttonText = "return to Merch List"
		} else {
			currentlyVisibleState = 
				<MerchList merchList={this.props.mainMerchList} />
				buttonText = "Add new Merch to List"
		}
    return (
			<React.Fragment>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</React.Fragment>
    );
  }
}
MerchControl.propTypes = {
	mainMerchList: PropTypes.object
}

const mapStateToProps = state => {
	return {
		mainMerchList: state
	}
}

MerchControl = connect(mapStateToProps)(MerchControl);

export default MerchControl;