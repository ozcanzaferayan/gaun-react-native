import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("HomeRouter");
  };
  return (
    <View style={styles.container}>
      <Text>Username</Text>
      <Text>Password</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
