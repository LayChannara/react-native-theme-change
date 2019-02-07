import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class PageTwo extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Button title='Red' onPress={ this.goRed }></Button>
				<Button title='Blue' onPress={ this.goBlue }></Button>
			</View>
		)
	}

	goRed = () => {
		this.props.screenProps.applyTheme('red')
	}

	goBlue = () => {
		this.props.screenProps.applyTheme('blue')
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
})
