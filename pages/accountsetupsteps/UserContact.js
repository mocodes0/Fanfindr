import React, { memo } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import SetupHeader from "../../components/SetupHeader";
import StepButton from "../../components/StepButton";

function UserContact({ setStep }) {
  return (
    <View>
      <SetupHeader
        heading={"Contacts"}
        text={
          "Get special invites, gifts, and discounts when you’re not logged in. Only approved partners."
        }
      />

      <View style={style.contactInput}>
        <Image source={require("../../assets/pics/mail.png")} />
        <TextInput
          style={style.input}
          placeholder="alex_manager@gmail.com"
          placeholderTextColor="rgba(36, 36, 38, 0.7)"
        />
      </View>

      <View style={style.contactInput}>
        <Image source={require("../../assets/pics/phone.png")} />
        <TextInput
          style={style.input}
          placeholder="+1 555 555-1234"
          placeholderTextColor="rgba(36, 36, 38, 0.7)"
        />
      </View>
      <SetupHeader
        heading={"Social network"}
        text={"Indicate desired communication method"}
      />
      <View style={style.contactInput}>
        <Image source={require("../../assets/pics/skype.png")} />
        <TextInput
          style={style.input}
          placeholder="@alex_92"
          placeholderTextColor="rgba(36, 36, 38, 0.7)"
        />
      </View>

      <View style={style.contactInput}>
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../../assets/pics/facebook-s.png")}
        />
        <TextInput
          style={style.input}
          placeholder="@profile"
          placeholderTextColor="rgba(36, 36, 38, 0.7)"
        />
      </View>
      <TouchableOpacity>
        <Text style={{ color: "#FFD646" }}>+ Add</Text>
      </TouchableOpacity>
      <StepButton text="Go Next" onPress={setStep} />
    </View>
  );
}

export default memo(UserContact);

const style = StyleSheet.create({
  contactInput: {
    paddingVertical: 12,
    borderBottomColor: "#E2E4E5",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  input: {
    marginLeft: 16,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "400",
  },
});
