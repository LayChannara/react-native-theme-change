import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import PageOne from './page-one'
import PageTwo from './page-two'

const StackNavigator = createAppContainer(createStackNavigator(
	{
		PageOne: {
			screen: PageOne,
			navigationOptions: ({screenProps}) => ({
				title: 'Page 1',
				headerStyle: {
					backgroundColor: screenProps.theme
				}
			})
		},
		PageTwo: {
			screen: PageTwo,
			navigationOptions: ({screenProps}) => ({
				title: 'Page 2',
				headerStyle: {
					backgroundColor: screenProps.theme
				}
			})
		}
	},
	{
		initialRouteName: 'PageOne',
	}
))

class RootApp extends Component {

	constructor(props) {
		super(props);
		this.state = {
			applyTheme: this.applyTheme.bind(this),
			theme: 'red'
		}
	}

	render() {
		return (
			<StackNavigator screenProps={this.state}/>
		);
	}

	applyTheme = (theme) => {
		this.setState({ theme: theme })
	}
}

export default RootApp