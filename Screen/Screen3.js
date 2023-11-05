import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const Screen3 = ({ navigation, route }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 30 }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 50 }}
          source={route.params?.image}
        />
        <View style={{ marginLeft: 5 }}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}
          >
            Hi {route.params?.name}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontWeight: "700",
              opacity: 0.75,
            }}
          >
            Have a great day ahead
          </Text>
        </View>
      </View>

      <Text style={{ textAlign: "center", fontSize: 32, fontWeight: "700" }}>
        ADD YOUR JOB
      </Text>

      <View style={styles.inputTxt}>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../assets/list.png")}
        />
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Input your job"
        ></TextInput>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate("Screen2");
        }}
        style={{
          width: 190,
          height: 44,
          borderRadius: 12,
          backgroundColor: "#00BDD6",
          alignItems: "center",
          paddingTop: 10,
          marginTop: 32,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "Inter",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Finish
        </Text>
      </Pressable>

      <Image
        style={{
          width: 190,
          height: 170,
          alignSelf: "center",
          marginTop: 50,
        }}
        source={require("../assets/Image95.png")}
      />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputTxt: {
    display: "flex",
    padding: 9,
    flexDirection: "row",
    gap: 8,
    width: 334,
    height: 43,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#9095A0",
    backgroundColor: "rgba(0, 0, 0, 0.00)",
    marginTop: 60,
    alignSelf: "center",
  },
});
