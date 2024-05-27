/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import MyHomePage from './screen/home/Home';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#10C6E7" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <MyHomePage />
      </SafeAreaView>
    </>
  );
};
export default App;
