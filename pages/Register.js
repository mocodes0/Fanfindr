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
import Notification from "../components/Notification";
import ConfirmPhone from "./regsteps/ConfirmPhone";
import GetLogin from "./regsteps/GetLogin";
import GetPhone from "./regsteps/GetPhone";

/*
 *Total Number of steps user have to do while registration
 */
const steps = {
  1: GetPhone,
  2: ConfirmPhone,
  3: GetLogin,
};

function Register() {
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
    <View style={{ height: "100%" }}>
      <ScrollView>
        <View style={style.container}>
          <LinearGradient
            colors={[
              "rgba(7, 5, 2, 1)",
              "rgba(7, 5, 2, 0.7)",
              "rgba(254, 182, 73, 0.6)",
            ]}
            style={style.linearGradient}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: -0.1, y: 1 }}
          >
            <ImageBackground
              source={require("../assets/pics/basket.png")}
              style={style.bgImage}
            >
              <View style={{ position: "relative" }}>
                {/*
                 *If the current step is 1 and 2 then use simple image
                 */}
                {step !== 3 && (
                  <Image
                    style={[
                      step === 1 && style.step1,
                      step === 2 && style.step2,
                    ]}
                    source={require("../assets/pics/steplocation.png")}
                  />
                )}
                {/*
                 *If the current step is 3rd then use filled image
                 */}
                {step === 3 && (
                  <Image
                    style={[step === 3 && style.step3]}
                    source={require("../assets/pics/locationfilled.png")}
                  />
                )}
                <Steper step={step} />
              </View>
              <Text style={style.text}>REGISTRATION</Text>
            </ImageBackground>

            <Text style={style.p}>
              {step === 1 &&
                /*
                 *If step is 1 then use this text
                 */
                "It only takes a moment to register. All you need is a phone number and email"}
              {step === 2 &&
                /*
                 *If step is 2 then use this text
                 */
                "To confirm your phone number, enter the code below. Or, request another be sent. "}
              {step === 3 &&
                /*
                 *If step is 3 then use this text
                 */
                "Set up your login credentials, and done!"}
            </Text>
          </LinearGradient>
          <Notification step={step} />
          <View style={style.styleWrapper}>
            <Step setStep={memoizedSetStep} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Register;

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(7,5,2,1)",
    width: "100%",
    alignItems: "center",
  },
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
    color: "#FF9500",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    fontStyle: "normal",
    marginBottom: 27,
    paddingHorizontal: 24,
    height: 61,
  },
  notificationWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  notification1: {
    flexDirection: "row",
  },

  notificationText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "500",
    color: "#fff",
    marginHorizontal: 16,
  },
  notificationNumber: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "600",
    color: "#fff",
  },
  notP: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "400",
  },
  styleWrapper: {
    paddingHorizontal: 24,
    backgroundColor: "#FBA500",
    width: "100%",
    height: "1000%",
    paddingTop: 34,
  },
});
