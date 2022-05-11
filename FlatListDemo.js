import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

const FlatListDemo = () => {
  const names = [
    {
      index: "1",
      name: "kapil",
    },
    {
      index: "2",
      name: "dev",
    },
    {
      index: "3",
      name: "vaibhav",
    },
    {
      index: "4",
      name: "ravi",
    },
    {
      index: "5",
      name: "vinod",
    },
    {
      index: "6",
      name: "technical",
    },
    {
      index: "7",
      name: "vinod",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
        horizontal
      //inverted
      //numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text style={styles.textStyle}> {item.name} </Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default FlatListDemo;