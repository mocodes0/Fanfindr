import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

function Login({ navigation }) {
  return (
    <View style={style.container}>
      <Image
        style={style.fanImg}
        source={require("../assets/pics/fanfinder.png")}
      />
      <Image
        style={style.locateImg}
        source={require("../assets/pics/locatelg.png")}
      />
      <View style={style.textContainer}>
        <Text style={{ ...style.p, color: "#F7B500" }}>FIND LOCAL FANS</Text>
        <Text style={{ ...style.h1, color: "#fff" }}>
          Watching Your Favorite Teams
        </Text>
        <Text style={{ ...style.p, color: "#FA6400" }}>ANYWHERE YOU GO</Text>
      </View>

      <View width="100%">
        <TouchableOpacity>
          <View style={{ ...style.btn, borderColor: "#3B5998B0" }}>
            <View>
              <Image source={require("../assets/pics/facebook.png")} />
            </View>
            <View>
              <Text style={style.btnText}>Login with Facebook</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ ...style.btn, borderColor: "#28B446A6" }}>
            <View>
              <Image source={require("../assets/pics/google.png")} />
            </View>
            <View>
              <Text style={style.btnText}>Login with Google</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ ...style.btn, borderColor: "#DD1475BA" }}>
            <View>
              <Image source={require("../assets/pics/instagram.png")} />
            </View>
            <View>
              <Text style={style.btnText}>Login with Instagram</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /*
             * Navigate to email login screen
             */
            navigation.navigate("emaillogin");
          }}
        >
          <View
            style={{
              ...style.btn,
              borderColor: "#fff",
              backgroundColor: "#005EB6",
            }}
          >
            <View>
              <Image source={require("../assets/pics/email.png")} />
            </View>
            <View>
              <Text style={{ ...style.btnText, color: "#fff" }}>
                Continue with Email
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={style.h5Container}>
        <Text style={{ ...style.h5, color: "#B4B5BA" }}>
          Don’t have any account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            /*
             * Navigate to register screen
             */
            navigation.navigate("register");
          }}
        >
          <View>
            <Text style={{ ...style.h5, color: "#3AA0FF", marginLeft: 7 }}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 32,
    backgroundColor: "#000",
    height: "100%",
  },
  fanImg: {
    marginTop: 30,
  },
  locateImg: {
    marginVertical: 21,
  },
  textContainer: {
    marginBottom: 41,
  },
  h1: {
    fontSize: 21,
    lineHeight: 31,
    fontWeight: "600",
    marginTop: 2,
    marginBottom: 9,
  },
  p: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "600",
    textAlign: "center",
  },
  btn: {
    width: "100%",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 8,
    paddingLeft: 20,
    marginBottom: 14,
  },
  btnText: { color: "#ACADB3", fontSize: 16, marginLeft: 64 },
  h5Container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h5: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 25,
  },
});
