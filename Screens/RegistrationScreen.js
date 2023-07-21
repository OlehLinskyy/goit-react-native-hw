import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import closeButton from "../images/add.png";

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

function RegistrationScreen() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegistration = () => {
    console.log({name,password,email,});
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.registrationScreen}>
        <View style={styles.registrationAvatar}></View>
        <Image style={styles.closeButton} source={closeButton} />
        <Text style={styles.registration}>Реєстрація</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          onFocus={this.focusedInput}
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
        />
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
        <TouchableOpacity style={styles.button} onPress={onRegistration}>
          <Text style={styles.textButton}>Зареєструватися</Text>
        </TouchableOpacity>
        <View style={styles.login}>
          <Text style={styles.tologin}>Вже є акаунт?</Text>
          <TouchableOpacity>
            <Text style={styles.tologin}> Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default RegistrationScreen;

const styles = StyleSheet.create({
  registration: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35.16,
    marginBottom: 17,
    marginTop: 61,
  },
  registrationScreen: {
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
  registrationAvatar: {
    position: "absolute",
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: "50%",
    marginLeft: -49,
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
  closeButton: {
    width: 25,
    height: 25,
    bottom: -20,
    left: 242,
  },
  login: {
    marginTop: 16,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    color: "#1B4371",
  },
  tologin: {
    color: "#1B4371",
  },
});
