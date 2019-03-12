import React, { Component } from 'react';
import {
	Platform, StyleSheet, Text, View, Button,
	TouchableHighlight, TextInput, ScrollView
} from 'react-native';

const btnItem = {
	flex: 1,
	borderWidth: 0.5,
	borderColor: 'gray',
	justifyContent: 'center',
	alignItems: 'center',

}

const symBtnUnderlayColor = '#7947cf'
const numBtnUnderlayColor = '#9d86d1'

const styles = StyleSheet.create({
	rowView: {
		flexDirection: 'row',
		flex: 1,
	},

	numBtn: {
		...btnItem,
		backgroundColor: "#c7b3ff",
	},

	symBtn: {
		...btnItem,
	
		backgroundColor: "#b08cff",
	},

	resultText: {
		fontSize: 40,
		textAlign: 'right',
		padding: 10,
	},

	expText: {
		fontSize: 18,
		padding: 4,
		textAlign: 'right',
	}
});

export default class App extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = { exp: "", result: '0' };
	}

	render() {
		return (

			<View style={{ flex: 1, flexDirection: 'column', }}>

				<View style={{ flex: 2, flexDirection: 'column', }}>
					<Text style={styles.resultText}>{this.state.result}</Text>

					<ScrollView style={{ flex: 1 }}>
						<Text style={styles.expText}>{this.state.exp}</Text>
					</ScrollView>
				</View>

				<View style={styles.rowView}>
					<TouchableHighlight underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('(')}>
						<Text>(</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed(')')}>
						<Text>)</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('Del')}>
						<Text>Del</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('C')}>
						<Text>C</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.rowView}>
					<TouchableHighlight  underlayColor={numBtnUnderlayColor} style={styles.numBtn} onPress={() => this.onButtonPressed('7')}>
						<Text>7</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={numBtnUnderlayColor} style={styles.numBtn} onPress={() => this.onButtonPressed('8')}>
						<Text>8</Text>
					</TouchableHighlight>
					<TouchableHighlight underlayColor={numBtnUnderlayColor}  style={styles.numBtn} onPress={() => this.onButtonPressed('9')}>
						<Text>9</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('/')}>
						<Text>/</Text>
					</TouchableHighlight>
				</View>


				<View style={styles.rowView}>
					<TouchableHighlight underlayColor={numBtnUnderlayColor}  style={styles.numBtn} onPress={() => this.onButtonPressed('4')}>
						<Text>4</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={numBtnUnderlayColor} style={styles.numBtn} onPress={() => this.onButtonPressed('5')}>
						<Text>5</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={numBtnUnderlayColor} style={styles.numBtn} onPress={() => this.onButtonPressed('6')}>
						<Text>6</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('*')}>
						<Text>x</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.rowView}>
					<TouchableHighlight underlayColor={numBtnUnderlayColor}  style={styles.numBtn} onPress={() => this.onButtonPressed('1')}>
						<Text>1</Text>
					</TouchableHighlight>
					<TouchableHighlight underlayColor={numBtnUnderlayColor}  style={styles.numBtn} onPress={() => this.onButtonPressed('2')}>
						<Text>2</Text>
					</TouchableHighlight>
					<TouchableHighlight underlayColor={numBtnUnderlayColor}  style={styles.numBtn} onPress={() => this.onButtonPressed('3')}>
						<Text>3</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('-')}>
						<Text>-</Text>
					</TouchableHighlight>
				</View>

				<View style={styles.rowView}>
					<TouchableHighlight underlayColor={numBtnUnderlayColor}  style={styles.numBtn} onPress={() => this.onButtonPressed('.')}>
						<Text>.</Text>
					</TouchableHighlight>
					<TouchableHighlight underlayColor={numBtnUnderlayColor}  style={styles.numBtn} onPress={() => this.onButtonPressed('0')}>
						<Text>0</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('=')}>
						<Text>=</Text>
					</TouchableHighlight>
					<TouchableHighlight  underlayColor={symBtnUnderlayColor} style={styles.symBtn} onPress={() => this.onButtonPressed('+')}>
						<Text>+</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}

	onButtonPressed(btn) {
		newExp = "";
		newResult = this.state.result;

		if (btn == 'Del') {
			newExp = this.state.exp.slice(0, -1)
		} else if (btn == 'C') {
			newExp = ""
			newResult = "0"
		} else if (btn == '=') {
			newExp = this.state.exp;
			try {
				newResult = Math.round(eval(this.state.exp)*100)/100
			} catch (e) { }
		} else {
			newExp = this.state.exp + btn;
		}

		this.setState({
			exp: newExp,
			result: newResult
		})
	}
}

