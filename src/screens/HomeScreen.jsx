import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import fetchPeople from "../api/fetchPeople";

const HomeScreen = ({ navigation }) => {
  const { data, error, isError, isLoading } = useQuery(["data"], fetchPeople);

  const handleNavigate = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error! {error.message}</Text>}
      <Button title="Ayarlar'a git" onPress={handleNavigate} />
      {data &&
        data.map((person) => (
          <Text style={styles.text} key={person.id}>
            {person.name}
          </Text>
        ))}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
