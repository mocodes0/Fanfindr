import React, { memo, useState } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StepButton from "../../components/StepButton";

function GetLogin({}) {
  {
    /*
     *React Navigation
     */
  }
  const navigation = useNavigation();

  const [passwordValue, setPasswordValue] = useState("1234567");
  return (
    <View>
      <View style={{ width: "100%", marginBottom: 40 }}>
        <Text style={style.label}>Enter your email</Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <TextInput
            style={style.input}
            placeholder="alex_manager@gmail.com"
            placeholderTextColor="rgba(36, 36, 38, 0.7)"
            selectionColor={"#fff"}
          />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <Text style={style.label}>Set a password</Text>
        <View style={style.pInputWrapper}>
          <TextInput
            style={[style.pInput, true && { letterSpacing: 3 }]}
            selectionColor={"#fff"}
            secureTextEntry={true}
            value={passwordValue}
            onFocus={() => {
              console.log("hehe");
              setPasswordValue("");
            }}
            onChangeText={({ newText }) => setPasswordValue(newText)}
          />
          <Image source={require("../../assets/pics/eye.png")} />
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
      >
        <Image source={require("../../assets/pics/tick-green.png")} />
        <Text style={style.p}>Good password</Text>
      </View>
      <StepButton
        onPress={() => {
          navigation.navigate("accountsetup");
        }}
        text="Save"
      />
    </View>
  );
}

export default memo(GetLogin);

const style = StyleSheet.create({
  label: {
    fontSize: 18,
    lineHeight: 20,
    color: "#323334",
    fontWeight: "600",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E4E5",
    color: "#000",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "400",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
  },
  pInputWrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E4E5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pInput: {
    color: "rgba(36, 36, 38, 0.7)",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "400",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "90%",
  },
  p: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "500",
    marginLeft: 4,
  },
});
