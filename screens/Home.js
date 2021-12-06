import React from "react";
import { View, Text, SafeAreaView, StatusBar, styleSheet } from "react-native";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#eee",
        flex: 1,
        padding: 25;
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}
