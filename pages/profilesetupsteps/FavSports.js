import React, { memo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import StepButton from "../../components/StepButton";

/*
 *Favorite Sport
 */
const favoriteSports = ["Basketball", "American Football"];
/*
 *Basket Ball Teams
 */
const basketballTeams = [
  "Boston Celtics",
  "Brooklyn Nets",
  "New York Knicks",
  "Philadelphia 76ers",
  "Toronto Raptors",
  "Golden State Warriors",
  "LA Clippers",
  "Los Angeles Lakers",
  "Phoenix Suns",
  "Sacramento Kings",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Detroit Pistons",
  "Indiana Pacers",
  "Milwaukee Bucks",
  "Atlanta Hawks",
  "Charlotte Hornets",
  "Miami Heat",
  "Orlando Magic",
  "Washington Wizards",
  "Denver Nuggets",
  "Minnesota Timberwolves",
  "Oklahoma City Thunder",
  "Portland Trail Blazers",
  "Utah Jazz",
  "Dallas Mavericks",
  "Houston Rockets",
  "Memphis Grizzlies",
  "New Orleans Pelicans",
  "San Antonio Spurs",
];
/*
 *Football Teams
 */
const footballTeams = [
  "Buffalo Bills",
  "Miami Dolphins",
  "New England Patriots",
  "New York Jets",
  "Dallas Cowboys",
  "New York Giants",
  "Philadelphia Eagles",
  "Washington Commanders",
  "Chicago Bears",
  "Detroit Lions",
  "Green Bay Packers",
  "Minnesota Vikings",
  "Baltimore Ravens",
  "Cincinnati Bengals",
  "Cleveland Browns",
  "Pittsburgh Steelers",
  "Houston Texans",
  "Indianapolis Colts",
  "Jacksonville Jaguars",
  "Tennessee Titans",
  "Atlanta Falcons",
  "Carolina Panthers",
  "New Orleans Saints",
  "Tampa Bay Buccaneers",
  "Denver Broncos",
  "Kansas City Chiefs",
  "Las Vegas Raiders",
  "Los Angeles Chargers",
  "Arizona Cardinals",
  "Los Angeles Rams",
  "San Francisco 49ers",
  "Seattle Seahawks",
];

function FavSports({ setStep }) {
  const [selectedSport, setSelectedSport] = useState("");
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.label}>Sport Selection</Text>

        <View style={style.favWrapper}>
          <Text style={style.text}>FAVORITE </Text>
          <Text style={{ ...style.text, fontWeight: "900" }}>SPORT</Text>
        </View>

        <View style={{ ...style.wrapper, backgroundColor: "#FF0000" }}>
          <View style={style.dropDownWrapper}>
            <SelectDropdown
              data={favoriteSports}
              buttonStyle={{
                padding: 0,
                backgroundColor: "transparent",
                width: 240,
                height: 44,
              }}
              dropdownStyle={{
                width: 270,
              }}
              buttonTextStyle={{
                padding: 0,
                margin: 0,
              }}
              defaultButtonText="Chose one"
              onSelect={(selectedItem, index) => {
                setSelectedSport(selectedItem);
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <Image source={require("../../assets/pics/arrowdown.png")} />
          </View>
        </View>

        <View style={style.hr}></View>
        <View style={style.favWrapper}>
          <Text style={style.text}>FAVORITE </Text>
          <Text style={{ ...style.text, fontWeight: "900" }}>TEAM</Text>
        </View>
        <View style={{ ...style.wrapper, backgroundColor: "#FFE600" }}>
          <View style={style.dropDownWrapper}>
            <SelectDropdown
              /*
               * Render Teams against selected Team
               */
              data={
                selectedSport === "Basketball" ? basketballTeams : footballTeams
              }
              buttonStyle={{
                padding: 0,
                backgroundColor: "transparent",
                width: 240,
                height: 44,
              }}
              dropdownStyle={{
                width: 270,
              }}
              buttonTextStyle={{
                padding: 0,
                margin: 0,
              }}
              defaultButtonText="Chose one"
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <Image source={require("../../assets/pics/arrowdown.png")} />
          </View>
        </View>
        <View style={style.hr}></View>

        <StepButton text="Go Next" onPress={setStep} />
      </View>
    </ScrollView>
  );
}

export default memo(FavSports);

const style = StyleSheet.create({
  container: {
    paddingTop: 34,
    paddingHorizontal: 24,
  },
  label: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
    color: "#fff",
    marginBottom: 32,
  },
  favWrapper: {
    backgroundColor: "#000",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 4,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 20,
  },
  wrapper: {
    borderRadius: 8,
    paddingHorizontal: 21,
    paddingVertical: 8,
    marginTop: 14,
    marginBottom: 32,
  },
  dropDownWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E4E5",
    marginRight: 16,
    backgroundColor: "#fff",
    width: "100%",
  },
  hr: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 14,
  },
});
