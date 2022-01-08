import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  CheckBox,
} from 'react-native';

export default class ToDoListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputTxt: '',
      checks: [
        { id: 1, txt: 'first check', isChecked: false },
        { id: 2, txt: 'second check', isChecked: false },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Image style={styles.logo} source={require('../assets/title2.png')} />
        <Text style={styles.text}>Details Screen</Text>
        <Image
          source={require('../assets/lp.png')}
          style={styles.Image}>
        </Image>
        <View>
          <View style={styles.checkboxContainer}>
            <CheckBox />
            {/* Add all the checkboxes from my this.state.checks array here */}
            <Text style={styles.label}>Do you like React Native?</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
    resizeMode: 'cover',
    height: '140%',
    width: '96%',
    alignItems: 'center',
  },
});
