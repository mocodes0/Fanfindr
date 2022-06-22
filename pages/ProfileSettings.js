import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import BottomNav from "../components/BottomNav.js";

function ProfileSettings() {
  {
    /*
     *React Navigation
     */
  }
  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient
        colors={["#FBA500", "#FF5C00", "#800F00"]}
        style={style.linearGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={style.profileContainer}>
          <View style={style.metaWrapper}>
            <View style={{ flexDirection: "row" }}>
              <View style={style.user}>
                <Image source={require("../assets/pics/user.png")} />
              </View>
              <View style={style.userMeta}>
                <Text style={style.userName}>Vince Dooley</Text>
                <TouchableOpacity style={style.gold}>
                  <Text>Gold member</Text>
                  <Image source={require("../assets/pics/arrow-right.png")} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={() => {}} style={style.setting}>
                <Image source={require("../assets/pics/settings.png")} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.stats}>
            <Text style={style.statsHeading}>My account</Text>
            <View style={style.statsContainer}>
              <View style={style.statsWrapper}>
                <Image source={require("../assets/pics/r-red.png")} />
                <View style={style.statsText}>
                  <Text style={style.heading}>My Check-ins</Text>
                  <Text style={style.p}>113</Text>
                </View>
              </View>
              <View style={style.statsWrapper}>
                <Image source={require("../assets/pics/p-green.png")} />
                <View style={style.statsText}>
                  <Text style={style.heading}>My Points</Text>
                  <Text style={style.p}>7014 Points</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["#FF443A", "#FBA500", "#FFDB7E", "#FFDB7E"]}
        style={style.linearGradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={style.container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("accountsetup");
            }}
          >
            <View style={style.listContainer}>
              <View style={style.leftWrapper}>
                <View style={style.iconWrapper}>
                  <Image source={require("../assets/pics/profile.png")} />
                </View>
                <Text style={style.profileText}>Personal Info</Text>
              </View>
              <Image source={require("../assets/pics/arrow-right.png")} />
            </View>
          </TouchableOpacity>

          <View style={style.listContainer}>
            <View style={style.leftWrapper}>
              <View style={style.iconWrapper}>
                <Image source={require("../assets/pics/voucher.png")} />
              </View>
              <Text style={style.profileText}>My Voucher</Text>
            </View>
            <Image source={require("../assets/pics/arrow-right.png")} />
          </View>

          <View style={style.listContainer}>
            <View style={style.leftWrapper}>
              <View style={style.iconWrapper}>
                <Image source={require("../assets/pics/review.png")} />
              </View>
              <Text style={style.profileText}>Reviews</Text>
            </View>
            <Image source={require("../assets/pics/arrow-right.png")} />
          </View>

          <View style={style.hr}></View>

          <View style={style.listContainer}>
            <View style={style.leftWrapper}>
              <View style={style.iconWrapper}>
                <Image source={require("../assets/pics/about.png")} />
              </View>
              <Text style={style.profileText}>About Us</Text>
            </View>
            <Image source={require("../assets/pics/arrow-right.png")} />
          </View>

          <View style={style.listContainer}>
            <View style={style.leftWrapper}>
              <View style={style.iconWrapper}>
                <Image source={require("../assets/pics/help.png")} />
              </View>
              <Text style={style.profileText}>Help Center</Text>
            </View>
            <Image source={require("../assets/pics/arrow-right.png")} />
          </View>
        </View>
      </LinearGradient>

      <BottomNav />
    </ScrollView>
  );
}

export default ProfileSettings;

const style = StyleSheet.create({
  profileContainer: {
    backgroundColor: "#36363F80",
    paddingHorizontal: 36,
    paddingTop: 24,
    paddingBottom: 28,
    borderTopRightRadius: 31,
    borderTopLeftRadius: 31,
    marginTop: 46,
  },
  user: {
    borderWidth: 5,
    borderColor: "#fff",
    borderRadius: 16,
    width: 85,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  metaWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userMeta: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 24,
    color: "#fff",
  },
  gold: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 14,
    paddingRight: 8,
    backgroundColor: "#FFBF22",
    borderRadius: 30,
    marginTop: 6,
  },
  setting: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,.37)",
  },
  stats: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
    backgroundColor: "#242545BA",
    borderRadius: 24,
    marginTop: 31,
  },
  statsWrapper: {
    flexDirection: "row",
  },
  statsHeading: {
    marginBottom: 16,
    fontSize: 16,
    color: "#E6E6E6",
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsText: {
    marginLeft: 11,
  },
  heading: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    color: "#AAB2B7",
  },
  p: {
    fontWeight: "500",
    color: "#FCFCFE",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 4,
  },
  container: {
    paddingHorizontal: 35,
    paddingTop: 50,
    paddingBottom: 117,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#F1F6FB80",
    borderRadius: 13,
    marginRight: 16,
  },
  profileText: {
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 24,
    color: "#2E3E5C",
    letterSpacing: 0.5,
  },
  hr: { borderBottomColor: "#EFEFEF", borderBottomWidth: 1, marginBottom: 26 },
});
