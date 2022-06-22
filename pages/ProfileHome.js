import React,{useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BottomNav from "../components/BottomNav";

function ProfileHome({ navigation }) {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.imgWrapper}>
          <TouchableOpacity style={style.editing}>
            <Image source={require("../assets/pics/edit-2.png")} />
          </TouchableOpacity>
          <Image source={require("../assets/pics/profilehome.png")} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("profilesettings");
            }}
            style={style.setting}
          >
            <Image source={require("../assets/pics/settings.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ height: 200 }}></View>
        <View>
          <View style={style.userData}>
            <View style={style.userMeta}>
              <View style={style.user}>
                <Image source={require("../assets/pics/user.png")} />
              </View>
              <View style={style.textContainer}>
                <View style={style.textWrapper}>
                  <Text style={style.name}>Vince Dooley, 47</Text>
                  <Image source={require("../assets/pics/verified.png")} />
                </View>
                <View style={style.textWrapper}>
                  <Text style={style.location}>Athens, GA</Text>
                  <Text style={style.status}>Online Now</Text>
                </View>
              </View>
            </View>
            <View style={style.userDesc}>
              <View style={{ ...style.descText, marginBottom: 27 }}>
                <View>
                  <Text style={{ ...style.heading, color: "#FA0F00F0" }}>
                    Favorite Team
                  </Text>
                  <Text style={style.value}>Georgia Bulldogs</Text>
                </View>
                <View>
                  <Text style={{ ...style.heading, color: "#5CFD24C4" }}>
                    Favorite Spot
                  </Text>
                  <Text style={style.value}>The Varsity</Text>
                </View>
              </View>
              <View style={{ ...style.descText, marginBottom: 54 }}>
                <View>
                  <Text style={{ ...style.heading, color: "#FF9500" }}>
                    Favorite Sport
                  </Text>
                  <Text style={style.value}>Soccer</Text>
                </View>
                <View style={{ alignSelf: "flex-end" }}>
                  <Text style={{ ...style.value, fontStyle: "italic" }}>
                    @UGAVinnie65
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("profilesettings");
              }}
            >
              <View style={style.completeProfile}>
                <View>
                  <Text style={style.heading}>Complete Your Profile</Text>
                  <Text style={style.p}>
                    Fill out your personal information
                  </Text>
                </View>
                <Image source={require("../assets/pics/go.png")} />
              </View>
            </TouchableOpacity>
          </View>
          <BottomNav />
        </View>
      </View>
    </ScrollView>
  );
}

export default ProfileHome;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FBA500",
    flex: 1,
    position: "relative",
  },
  imgWrapper: {
    position: "relative",
    marginTop: 0,
  },
  editing: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,.37)",
    position: "absolute",
    top: 14,
    right: 15,
    zIndex: 100,
  },
  setting: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,.37)",
    position: "absolute",
    bottom: 12,
    right: 15,
  },
  userData: {
    backgroundColor: "#36363F",
    paddingHorizontal: 24,
    paddingBottom: 44,
    borderTopRightRadius: 31,
    borderTopLeftRadius: 31,
    position: "relative",
  },
  user: {
    borderWidth: 8,
    borderColor: "#fff",
    borderRadius: 80,
    backgroundColor: "#6F5151",
    padding: 3,
    marginRight: 10,
  },
  userMeta: {
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    top: -40,
    left: 17,
  },
  textContainer: {
    marginBottom: 7,
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "400",
    color: "#fff",
    marginRight: 16,
  },
  location: {
    fontWeight: "600",
    lineHeight: 33,
    fontSize: 22,
    color: "#FDB824",
    marginRight: 11,
  },
  status: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: "#00CDFA",
  },
  userDesc: {
    marginTop: 110,
  },
  descText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 3,
    letterSpacing: 2,
  },
  value: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.5,
    color: "#fff",
  },
  completeProfile: {
    padding: 20,
    backgroundColor: "#898A8D4A",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 26,
    color: "#fff",
  },
  p: {
    fontSize: 12,
    lineHeight: 23,
    fontWeight: "400",
    color: "#B4B5BA",
  },
});
