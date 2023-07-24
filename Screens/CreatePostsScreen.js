import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";

import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

function CreatePostsScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.photo}>
          <TouchableOpacity style={styles.camera}>
            <AntDesign name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Image
            source={require("../images/ContentBlock.png")}
            style={styles.previewPhoto}
          />
          <Text style={styles.text}>Завантажте фото</Text>
          <TextInput
            placeholderTextColor={"#BDBDBD"}
            placeholder="Назва..."
            style={styles.input}
          ></TextInput>
          <TextInput
            placeholderTextColor={"#BDBDBD"}
            placeholder="Місцевість..."
            style={[styles.input, styles.locality]}
          ></TextInput>
          <Ionicons
            name="location-outline"
            size={24}
            color="#BDBDBD"
            style={styles.ionicons}
          />
          <TouchableOpacity style={styles.buttonPublish}>
            <Text style={styles.textPublish}>Опубліковати</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete}>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default CreatePostsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 34,
    paddingLeft: 16,
    backgroundColor: "#FFFFFF",
  },
  photo: {
    flex: 1,
    justifyContent: "flex-start",
  },
  previewPhoto: {
    width: "100%",
  },
  text: {
    marginTop: 8,
    marginBottom: 32,
    fontSize: 16,
    color: "#BDBDBD",
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
    borderBottomColor: "#E8E8E8",
    paddingTop: 15,
    paddingBottom: 16,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  locality: {
    paddingLeft: 25,
  },
  ionicons: {
    position: "absolute",
    bottom: 307,
  },
  buttonPublish: {
    backgroundColor: "#F6F6F6",
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    borderRadius: 5,
    borderRadius: 100,
    height: 51,
    marginTop: 43,
  },
  textPublish: {
    color: "#BDBDBD",
    textAlign: "center",
  },
  camera: {
    position: "absolute",
    top: 90,
    left: 160,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    zIndex: 2,
  },
  delete: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    marginTop: 120,
  },
});
