import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Steper from "../components/Steper";
import FavSports from "./profilesetupsteps/FavSports";
import FavVenue from "./profilesetupsteps/FavVenue";
import Welcome from "./profilesetupsteps/Welcome";

/*
 *Total Number of steps user have to do while registration
 */
const steps = {
  1: FavSports,
  2: FavVenue,
  3: Welcome,
};

function ProfileSetup() {
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
              "#0257CE",
              "#4D97EE",
              "#46320B",
              "#060B0FF0",
              "#1C1202",
              "#5C3C0ADD",
              "#FF9900BA",
            ]}
            style={style.linearGradient}
            start={{ x: 1.2, y: -0.3 }}
            end={{ x: 0.8, y: 1.3 }}
          >
            <ImageBackground
              source={require("../assets/pics/volleyball.png")}
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
                    source={require("../assets/pics/steplocationred.png")}
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
            </ImageBackground>
            <Text style={style.text}>PROFILE DATA</Text>
            <Text style={style.p}>
              {step === 1 &&
                /*
                 *If step is 1 then use this text
                 */
                "Let fans know WHO is gonna go down."}
              {step === 2 &&
                /*
                 *If step is 1 then use this text
                 */
                "Let fans know WHO is gonna go down."}
              {step === 3 &&
                /*
                 *If step is 3 then use this text
                 */
                ""}
            </Text>
          </LinearGradient>
          <View style={style.styleWrapper}>
            <Step setStep={memoizedSetStep} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileSetup;

const style = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FBA500",
    width: "100%",
    // alignItems: "center",
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

  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  p: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "800",
    fontStyle: "normal",
    marginBottom: 27,
    marginHorizontal: 24,
  },
  text: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 50,
    fontWeight: "400",
    fontFamily: "squdaone",
    textAlign: "center",
  },
  styleWrapper: {
    backgroundColor: "#FBA500",
    width: "100%",
    // height: "100%",
  },
});
