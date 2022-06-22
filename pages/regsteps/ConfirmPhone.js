import React, { memo } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import StepButton from "../../components/StepButton";

function ConfirmPhone({ setStep }) {
  return (
    <View>
      <View style={{ width: "100%" }}>
        <Text style={style.label}>Confirmation code</Text>
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
            placeholder="- - - -"
            placeholderTextColor="rgba(36, 36, 38, 0.7)"
            selectionColor={"#fff"}
          />
        </View>

        <Text style={style.p}>
          Confirm phone number with code from sms message
        </Text>
      </View>
      <View></View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 5,
        }}
      >
        <Image source={require("../../assets/pics/reload.png")} />
        <Text style={style.send}>Send again</Text>
      </TouchableOpacity>
      <StepButton onPress={setStep} text="Confirm" />
    </View>
  );
}

export default memo(ConfirmPhone);

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
    fontWeight: "500",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: "100%",
  },
  p: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
    color: "#575F6E",
    marginTop: 8,
  },
  send: {
    color: "#007AFF",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    marginLeft: 8,
  },
});
