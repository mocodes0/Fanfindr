import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

function Welcome() {
  {
    /*
     *React Navigation
     */
  }
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Image
        style={style.img}
        source={require("../../assets/pics/welcome-img.png")}
      />

      <View style={{ marginTop: 400 }}>
        <TouchableOpacity>
          <View style={style.btnsm}>
            <Image
              style={{ marginRight: 8 }}
              source={require("../../assets/pics/navigation.png")}
            />
            <Text style={style.text}>Show Me Games</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("profilehome");
          }}
        >
          <View style={style.btnlg}>
            <Text style={style.text}>Go to My Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(Welcome);

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "relative",
  },
  img: {
    width: "100%",
    borderRadius: 31,
    position: "absolute",
    top: -25,
    left: 0,
  },
  btnsm: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginTop: 30,
    backgroundColor: "#05E81C",
    flexDirection: "row",
    alignItems: "center",
  },
  btnlg: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 75,
    marginTop: 64,
    marginBottom: 50,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
  },
});
