import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import FanHeader from "../components/FanHeader";

function Index({ navigation }) {
  return (
    <View style={style.container}>
      <FanHeader />
      <Image source={require("../assets/pics/fgff.png")} />
      <Text style={style.p}>ANYWHERE YOU GO</Text>
      <Image
        style={style.locateImg}
        source={require("../assets/pics/locatelg.png")}
      />
      <TouchableOpacity
        onPress={() => {
          /*
           * Navigate to login screen
           */
          navigation.navigate("login");
        }}
      >
        <View style={{ ...style.btn, ...style.login }}>
          <Text style={{ ...style.btnText }}>Log in</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          /*
           * Navigate to register screen
           */
          navigation.navigate("register");
        }}
      >
        <View style={{ ...style.btn, ...style.register }}>
          <Text style={{ ...style.btnText, color: "#FF9500" }}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Index;

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    // paddingHorizontal: 32,
    backgroundColor: "#000",
    height: "100%",
  },
  locateImg: {
    marginVertical: 21,
  },
  p: {
    color: "#0085FF",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 50,
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 82,
    backgroundColor: "#000",
    borderRadius: 16,
    borderWidth: 2,
  },
  login: {
    borderColor: "#FF004E",
  },
  register: {
    borderColor: "#FF9500",
    marginTop: 19,
    marginBottom: 42,
  },
  btnText: {
    fontSize: 28,
    color: "#fff",
  },
});
