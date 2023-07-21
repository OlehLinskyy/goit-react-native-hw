import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};

function LoginScreen() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log({email,password});
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.loginScreen}>
        <Text style={styles.login}>Увійти</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="пароль" 
          placeholderTextColor="#BDBDBD"
          secureTextEntry={passwordVisibility}
        />
        <Pressable
          style={styles.visibilPassword}
          onPress={handlePasswordVisibility}
        >
          <Text style={styles.visibil}>
            {passwordVisibility ? "Показати" : "Сховати"}
          </Text>
        </Pressable>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.textButton}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.registration}>
          <Text style={styles.toregistration}>Немає акаунту?</Text>
          <TouchableOpacity>
            <Text style={styles.toregistration}> Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#FFFFFF",
    height: 549,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 10,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 16,
    marginBottom: 0,
    backgroundColor: "#F6F6F6",
  },
  login: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    marginBottom: 17,
    marginTop: 32,
  },
  button: {
    backgroundColor: "#FF6C00",
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    borderRadius: 5,
    borderRadius: 100,
    height: 51,
    marginTop: 43,
  },
  textButton: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  visibilPassword: {
    left: 270,
    bottom: 30,
  },
  visibil: {
    color: "#1B4371",
  },
  registration: {
    marginTop: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    color: "#1B4371",
  },
  toregistration: {
    color: "#1B4371",
  },
});
