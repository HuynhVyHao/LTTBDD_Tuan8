import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";

const Screen2 = ({ navigation, route }) => {
  const [avt, setAvt] = React.useState([route.params]);
  const arrJob = [
    {
      id: 1,
      name: "To check email",
    },
    {
      id: 2,
      name: "  UI task web page",
    },
    {
      id: 3,
      name: "Learn javascript basic",
    },
    {
      id: 4,
      name: " Learn HTML Advence",
    },
    {
      id: 5,
      name: "Medical App UI",
    },
    {
      id: 6,
      name: "Learn Java",
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", marginTop: "5px", marginLeft: "148px" }}
      >
        <Image
          style={{ width: "50px", height: "50px", borderRadius: "50px" }}
          source={route.params?.image}
        />
        <View style={{ marginLeft: "5px" }}>
          <Text
            style={{ textAlign: "center", fontSize: "20px", fontWeight: 700 }}
          >
            Hi {route.params?.name}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 700,
              opacity: 0.75,
            }}
          >
            Have agrate day a head
          </Text>
        </View>
      </View>

      {arrJob.map((item) => (
        <Pressable style={styles.btnJob}>
          <Image
            style={{ width: "24px", height: "24px" }}
            source={require("../assets/check.png")}
          />
          <Text
            style={{
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            {item.name}
          </Text>
          <Image
            style={{
              width: "24px",
              height: "24px",
              left: "-20px",
            }}
            source={require("../assets/edit.png")}
          />
        </Pressable>
      ))}

      <Pressable
        onPress={({}) => {
          avt.map((item) => {
            navigation.navigate("Screen3", item);
          });
        }}
        style={{
          width: "69px",
          height: "69px",
          backgroundColor: "#00BDD6",
          borderRadius: "50px",
          alignItems: "center",
          marginTop: "20px",
          paddingTop: "8px",
        }}
      >
        <Text style={{ fontSize: "32px", color: "#fff" }}>+</Text>
      </Pressable>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  btnJob: {
    width: "335px",
    height: "48px",
    borderRadius: "24px",
    backgroundColor: "lightgray",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "20px",
    justifyContent: "space-between",
    marginTop: "20px",
    boxShadow:
      "0px 8px 17px 0px rgba(23, 26, 31, 0.15), 0px 0px 2px 0px rgba(23, 26, 31, 0.12)",
  },
});
