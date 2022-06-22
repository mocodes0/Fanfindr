import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmailLogin from "./pages/EmailLogin";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileHome from "./pages/ProfileHome";
import ProfileSettings from "./pages/ProfileSettings";
import AccountSetup from "./pages/AccountSetup";
import ProfileSetup from "./pages/ProfileSetup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={style.app}>
      {/*
       * Status Bar
       */}
      <StatusBar backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="/"
          screenOptions={{ headerShown: false }}
        >
          {/*
           * Screen's
           */}
          <Stack.Screen name="/" component={Index} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="emaillogin" component={EmailLogin} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="accountsetup" component={AccountSetup} />
          <Stack.Screen name="profilesetup" component={ProfileSetup} />
          <Stack.Screen name="profilehome" component={ProfileHome} />
          <Stack.Screen name="profilesettings" component={ProfileSettings} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <AccountSetup />
      <ProfileSetup /> */}
    </View>
  );
}

const style = StyleSheet.create({
  app: {
    flex: 1,
    width: "100%",
    marginTop: 0,
  },
});
