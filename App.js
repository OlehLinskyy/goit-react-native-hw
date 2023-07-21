import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import PhoneImage from "./images/Phone.png";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
      <View style={styles.container}>
        <ImageBackground
          source={PhoneImage}
          resizeMode="cover"
          style={styles. image}
        >
             {/* <LoginScreen/> */}
              <RegistrationScreen style={styles.text} />
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position:"absolute",
    top:0,
    left:0,
    bottom:0,
    right: 0,
    flexDirection: "column-reverse",
  },
});

