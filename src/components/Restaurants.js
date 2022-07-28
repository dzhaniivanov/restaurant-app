import { View, Text, StyleSheet, FlatList } from "react-native";
import * as data from "../common/restaurants.json";

const Restaurants = () => {
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data.restaurants}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default Restaurants;
