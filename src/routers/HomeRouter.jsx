import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import AddPostScreen from "../screens/AddPostScreen";
import LikesScreen from "../screens/LikesScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Favourites":
              iconName = focused ? "bookmark" : "bookmark-outline";
              break;
            case "AddPost":
              iconName = focused ? "plus-box" : "plus-box-outline";
              break;
            case "Likes":
              iconName = focused ? "heart" : "heart-outline";
              break;
            case "Settings":
              iconName = focused ? "cog" : "cog-outline";
              break;
            default:
              iconName = "home";
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "dodgerblue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Anasayfa",
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          title: "Favoriler",
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          title: "Ekle",
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          title: "Beğeniler",
        }}
      />
      <Tab.Screen
        options={{
          title: "Ayarlar",
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({});
