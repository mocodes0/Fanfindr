import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import Steper from "../components/Steper";
import UserId from "./accountsetupsteps/UserId";
import UserContact from "./accountsetupsteps/UserContact";
import UserAddress from "./accountsetupsteps/UserAddress";

/*
 *Total Number of steps user have to do while registration
 */
const steps = {
  1: UserId,
  2: UserContact,
  3: UserAddress,
};

function AccountSetup() {
  {
    /*
     *Handle the current step on which the user is
     */
  }
  const [step, setStep] = useState(1);
  {
    /*
     *Get the component against the step
     */
  }
  const Step = steps[step];

  {
    /*
     *Memoized setStep to pass it down to child components
     */
  }
  const memoizedSetStep = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  {
    /*
     *Load the squdaone font
     */
  }
  const [loaded] = useFonts({
    squdaone: require("../assets/fonts/squdaone.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <ScrollView>
      <LinearGradient
        colors={[
          "#7B4302EB",
          //   "#D74E23AB",
          //   "#FFF9D800",
          //   "#FBE6B970",
          //   "#FFD600C7",
          "#FFB800A1",
        ]}
        style={style.linearGradient}
        start={{ x: 0, y: 0 }}
        // end={{ x: -0.1, y: 1 }}
      >
        <ImageBackground
          source={require("../assets/pics/football.png")}
          style={style.bgImage}
        >
          <View style={{ position: "relative" }}>
            {/*
             *If the current step is 1 and 2 then use simple image
             */}
            {step !== 3 && (
              <Image
                style={[step === 1 && style.step1, step === 2 && style.step2]}
                source={require("../assets/pics/steplocationorange.png")}
              />
            )}
            {/*
             *If the current step is 3rd then use filled image
             */}
            {step === 3 && (
              <Image
                style={[step === 3 && style.step3]}
                source={require("../assets/pics/steplocationfilledorange.png")}
              />
            )}
            <Steper step={step} />
          </View>
          <Text style={style.text}>ACCOUNT SETUP</Text>
        </ImageBackground>
        <Text style={style.p}>
          {step === 1 &&
            /*
             *If step is 1 then use this text
             */
            "Your account data only takes a moment to fill out, but it adds security . "}
          {step === 2 &&
            /*
             *If step is 2 then use this text
             */
            "Let us know how you prefer to be reached in the event we can help."}
          {step === 3 &&
            /*
             *If step is 3 then use this text
             */
            "Our locator app will give accurate estimates from places you frequent most. "}
        </Text>
      </LinearGradient>
      <View style={style.container}>
        <Step setStep={memoizedSetStep} />
      </View>
    </ScrollView>
  );
}

export default AccountSetup;

const style = StyleSheet.create({
  bgImage: {
    marginTop: 17,
    resizeMode: "cover",
    justifyContent: "center",
    height: 294,
    opacity: 1,
    width: 263,
  },
  step1: {
    marginLeft: 21,
    marginBottom: 5,
  },
  step2: {
    marginLeft: 89,
    marginBottom: 5,
  },
  step3: {
    marginLeft: 157,
    marginBottom: 5,
  },
  text: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 50,
    fontWeight: "400",
    marginTop: 30,
    fontFamily: "squdaone",
    textAlign: "center",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  p: {
    textAlign: "center",
    color: "#434242",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontStyle: "normal",
    marginBottom: 27,
    paddingHorizontal: 24,
    height: 61,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 32,
    backgroundColor: "#FBA500",
  },
});
