import React, { memo } from "react";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import SetupHeader from "../../components/SetupHeader";
import StepButton from "../../components/StepButton";
import SetupInput from "../../components/SetupInput";

/*
 * List of all the countries
 */
const countries = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  "AmericanSamoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia, Plurinational State of",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of the Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran, Islamic Republic of Persian Gulf",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People's Republic of Korea",
  "Korea, Republic of South Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia, Federated States of Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory, Occupied",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Reunion",
  "Saint Barthelemy",
  "Saint Helena, Ascension and Tristan Da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "South Georgia and the South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

function UserAddress({}) {
  {
    /*
     *React Navigation
     */
  }
  const navigation = useNavigation();
  return (
    <View>
      <SetupHeader
        heading={"[Homebase] Address"}
        text={"Used for Uber and other partner taxi services"}
      />

      {/*
       * Custom Reuseable input pass value and setValue to it for state
       */}
      <SetupInput label="Address" placeholder={"47 W 13th St"} />

      <SetupInput label="City" placeholder={"New York"} />
      <View style={style.wraper}>
        <View style={style.dropDownWrapper}>
          <SelectDropdown
            data={countries}
            buttonStyle={{
              padding: 0,
              backgroundColor: "transparent",
              width: 100,
            }}
            buttonTextStyle={{
              padding: 0,
              margin: 0,
            }}
            defaultButtonText="USA"
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            dropdownStyle={{
              width: 300,
            }}
          />
          <Image source={require("../../assets/pics/arrowdown.png")} />
        </View>
        <View style={style.inputWrapper}>
          <Text style={style.label}>Zip Code</Text>
          <TextInput
            style={{ ...style.input, width: 150 }}
            placeholder="10011"
            placeholderTextColor="rgba(36, 36, 38, 0.7)"
          />
        </View>
      </View>
      <SetupInput
        label="Optional Instructions (e.g. back of building)"
        placeholder={""}
      />
      <StepButton
        text="Save"
        onPress={() => {
          navigation.navigate("profilesetup");
        }}
      />
    </View>
  );
}

export default memo(UserAddress);

const style = StyleSheet.create({
  dropDownWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E4E5",
    marginRight: 32,
    height: 65,
  },
  wraper: {
    flexDirection: "row",
    marginBottom: 32,
    justifyContent: "space-between",
  },
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
    width: 160,
  },
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
  },
});
