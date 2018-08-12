import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the Dashboard </Text>
      </View>
    )
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});
