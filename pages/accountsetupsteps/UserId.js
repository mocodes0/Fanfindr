import React, { memo, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SetupHeader from "../../components/SetupHeader";
import SetupInput from "../../components/SetupInput";
import StepButton from "../../components/StepButton";
import DateTimePicker from "@react-native-community/datetimepicker";

function UserId({ setStep }) {
  const [date, setDate] = useState(new Date());
  const [showSelectDate, setShowSelectDate] = useState(false);

  return (
    <View>
      <SetupHeader
        heading={"Personal data"}
        text={"Specify exactly as your ID for account security"}
      />

      {/*
       * Custom Reuseable input pass value and setValue to it for state
       */}
      <SetupInput label="First name" placeholder={"Alexander"} />
      <SetupInput label="Second name" placeholder={"Smith"} />

      <View style={style.inputWrapper}>
        <Text style={style.label}>Date of Birth</Text>
        <View
          onStartShouldSetResponder={() => {
            setShowSelectDate(true);
          }}
          style={{ ...style.input, marginBottom: 32 }}
        >
          <Text>{date.toLocaleDateString()}</Text>
          <Image source={require("../../assets/pics/arrowdown.png")} />
        </View>
      </View>

      {showSelectDate && (
        <DateTimePicker
          onChange={(event, date) => {
            setDate(date);
            setShowSelectDate(false);
          }}
          value={date}
          accentColor="#FBA500"
        />
      )}

      <SetupInput label="City of Residence" placeholder={"New York, USA"} />
      <StepButton text="Go Next" onPress={setStep} />
    </View>
  );
}

export default memo(UserId);

const style = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    color: "#fff",
    lineHeight: 20,
    fontWeight: "600",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: "#E2E4E5",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
