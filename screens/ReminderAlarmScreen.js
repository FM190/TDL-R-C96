import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";


export default class ReminderAlarmScreen extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Reminder Alarms</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
