import React from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';

import Main from './App/Components/Main';


export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS 
        initialRoute={{
          title: 'Github',
          component: Main
        }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});
