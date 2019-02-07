import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class PageOne extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Button title='Navigate' onPress={this.navigate}></Button>
			</View>
		)
	}

	navigate = () => {
		this.props.navigation.navigate('PageTwo')
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
