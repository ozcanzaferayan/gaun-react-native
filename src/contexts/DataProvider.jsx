import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export const DataContext = React.createContext({
  data: [],
});

const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Ruben Pfannerstill",
    },
  ]);

  const value = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;

const styles = StyleSheet.create({});
