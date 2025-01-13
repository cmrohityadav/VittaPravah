import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Let Invest and Become more Rich</Text>

        <Text>Invest ● Equity ● More Earn</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
