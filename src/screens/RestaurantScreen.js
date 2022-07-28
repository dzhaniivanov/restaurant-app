import { View, Text, Image, FlatList, Dimensions } from "react-native";
import * as data from "../common/restaurants.json";

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9)/16)


  return (
    <View>
      <FlatList
        data={data.restaurants}
        keyExtractor={(photo) => photo.name}
        renderItem={({ imgUrl }) => (
          <Image source={{ uri: imgUrl }} style={{ height: imageHeight, width: imageWidth }} />
        )}
      />
    </View>
  );
};

export default RestaurantScreen;
