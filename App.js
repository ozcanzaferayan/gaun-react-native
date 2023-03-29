import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import Providers from "./src/contexts/Providers";
import Router from "./src/routers/Router";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}
