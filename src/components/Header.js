import React from "react";

function Header() {

	const headerStyle = {
		margin: '10px',
		border: '3px solid grey',
		padding: '5px',
		backgroundColor: 'blue',
		color: 'white'
	}
  return (
		<div style={headerStyle}>
			<h1>Welcome to the Feral Gazelle's Merch Site!</h1>
		</div>
  )
}

export default Header;