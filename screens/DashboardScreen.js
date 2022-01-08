import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Profile from './ProfileScreen';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="black"
          leftComponent={
            <Icon
              name="bars"
              type="font-awesome"
              color="lightgray"
              onPress={() => this.props.navigation.navigate('Profile')}
            />
          }
        />
        <Text></Text>
        <Image style={styles.logo} source={require('../assets/title.png')} />
        <Image style={styles.pic} source={require('../assets/MainPic.png')} />
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('SpaceCraft')}>
          <Text style={styles.routeText}>Instructions</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginTop: 7,
    marginBottom: 250,
    height: 40,
    width: 330,
    justifyContent: 'center',
    lignItems: 'center',
  },
  pic: {
    marginTop: -300,
    height: 300,
    width: 335,
  },
  routeCard: {
    flex: 0.30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    marginRight: 30,
    marginBottom: 30,
    height: '60%',
    width: '40%',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "'rgba(190, 183, 183, 0.5)'",
  },
});
