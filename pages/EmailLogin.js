import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import CheckBox from "expo-checkbox";
import { useFonts } from "expo-font";
import FanHeader from "../components/FanHeader";

function EmailLogin({ navigation }) {
  const [rememberCheck, setRememberCheck] = useState(false);
  const [termCheck, setTermCheck] = useState(false);

  const [loaded] = useFonts({
    squdaone: require("../assets/fonts/squdaone.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ScrollView>
      <View style={style.container}>
        <FanHeader />
        <Image source={require("../assets/pics/fgff-2.png")} />

        <Text style={style.h3}>ANYWHERE YOU GO</Text>
        <Text style={style.h1}>LOG IN</Text>
        <View style={{ width: "100%", padding: 32, alignItems: "center" }}>
          <View width={"100%"}>
            <TextInput
              style={{ ...style.input, marginBottom: 32 }}
              placeholder="Email"
              placeholderTextColor="#FFFFFFBA"
            />
            <TextInput
              style={{ ...style.input }}
              placeholder="Password"
              placeholderTextColor="#FFFFFFBA"
              secureTextEntry={true}
            />
          </View>
          <View style={style.textContainer}>
            <View style={style.checkContainer}>
              <CheckBox
                style={style.checkbox}
                value={rememberCheck}
                onValueChange={setRememberCheck}
                /*
                 * Background color when CheckBoxed is checked
                 */
                color={rememberCheck ? "#4630EB" : undefined}
              />
              <Text style={{ ...style.h4, color: "#1F85FEDE", marginLeft: 5 }}>
                {" "}
                Remember me
              </Text>
            </View>
            <View>
              <Text style={{ ...style.h4, color: "#FF9500" }}>
                {" "}
                Forgot password ?
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("profilehome");
            }}
          >
            <View style={{ ...style.btn, ...style.login }}>
              <Text style={{ ...style.btnText }}>Log in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              /*
               * Navigate to register
               */
              navigation.navigate("register");
            }}
          >
            <Text style={style.h5}>Create an account</Text>
          </TouchableOpacity>
          <View style={style.termContainer}>
            <CheckBox
              style={style.checkbox}
              value={termCheck}
              onValueChange={setTermCheck}
              /*
               * Background color when CheckBoxed is checked
               */
              color={termCheck ? "#4630EB" : undefined}
            />
            <Text style={{ ...style.p, color: "#979797" }}> I agree with </Text>
            <Text style={{ ...style.p, color: "#007AFF" }}>Terms of use</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default EmailLogin;

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#000",
  },
  h3: {
    color: "#0085FF",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 50,
  },
  h1: {
    fontSize: 40,
    fontWeight: "400",
    lineHeight: 50,
    color: "#fff",
    marginBottom: 89,
    marginTop: 20,
    fontFamily: "squdaone",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    fontSize: 16,
    padding: 10,
    lineHeight: 24,
    fontWeight: "600",
    color: "#FFFFFFBA",
  },
  textContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 23,
    marginBottom: 54,
  },
  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  h4: { fontWeight: "600", fontSize: 15, lineHeight: 24 },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#000",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#FF0000D6",
  },
  btnText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 24,
  },
  termContainer: {
    flexDirection: "row",
    // marginBottom: 54,
    marginTop: 19,
  },
  h5: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    color: "#FA6400",
    marginTop: 34,
  },
  p: {
    fontWeight: "500",
    fontSize: 16,
  },
});
