import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = () => {
  return (
    <View>
      <MaterialCommunityIcons name="cog-outline" size={100} color="black" />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
