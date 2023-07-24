import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import PhoneImage from "../images/Phone.png";
import ImageCard from "../images/Rectangle.png";
import ImageCard1 from "../images/Rectangle3.png"
import ImageCard2 from "../images/Rectangle4.png"

function ProfileScreen() {
  return (
    <ImageBackground
      source={PhoneImage}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.profileScreen}>
        <Image
          style={styles.profileAvatar}
          source={require("../images/Rectangle1.png")}
        />
        <View style={styles.antDesign}>
          <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
        </View>
        <TouchableOpacity>
          <Feather
            style={styles.feather}
            name="log-out"
            size={24}
            color="#BDBDBD"
          />
        </TouchableOpacity>
        <Text style={styles.nameUser}>Natali Romanova</Text>
        <ScrollView>
          <View style={styles.card}>
            <Image style={styles.ImageCard} source={ImageCard}/>
            <Text style={styles.namePhoto}>Ліс</Text>
            <View style={styles.postCard}>
              <View style={styles.statisticCard}>
                <View><Text><FontAwesome name="comment" size={24} color="#FF6C00" /> 8</Text></View>
                <View><Text><AntDesign name="like2" size={24} color="#FF6C00" /> 153</Text></View>
              </View>
              <View><Text><Ionicons name="location-outline" size={24} color="#BDBDBD" /> Ukraine</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <Image style={styles.ImageCard} source={ImageCard1}/>
            <Text style={styles.namePhoto}>Захід на Чорному морі</Text>
            <View style={styles.postCard}>
              <View style={styles.statisticCard}>
                <View><Text><FontAwesome name="comment" size={24} color="#FF6C00" /> 3</Text></View>
                <View><Text><AntDesign name="like2" size={24} color="#FF6C00" /> 200</Text></View>
              </View>
              <View><Text><Ionicons name="location-outline" size={24} color="#BDBDBD" /> Ukraine</Text></View>
            </View>
          </View>
          <View style={styles.card}>
            <Image style={styles.ImageCard} source={ImageCard2}/>
            <Text style={styles.namePhoto}>Старий будинок у Венеції</Text>
            <View style={styles.postCard}>
              <View style={styles.statisticCard}>
                <View><Text><FontAwesome name="comment" size={24} color="#FF6C00" /> 50</Text></View>
                <View><Text><AntDesign name="like2" size={24} color="#FF6C00" /> 200</Text></View>
              </View>
              <View><Text><Ionicons name="location-outline" size={24} color="#BDBDBD" /> Italy</Text></View>
            </View>
          </View>
          
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: "column-reverse",
  },
  profileScreen: {
    backgroundColor: "#FFFFFF",
    height: 600,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  profileAvatar: {
    position: "absolute",
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -60,
    left: "50%",
    marginLeft: -49,
  },
  avatar: {
    width: 132,
  },
  antDesign: {
    backgroundColor: "#FFFFFF",
    width: 25,
    borderRadius: 50,
    left: 244,
    top: 20,
  },
  feather: {
    left: 360,
  },
  nameUser: {
    fontWeight: 500,
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 32,
  },
  ImageCard:{
    width:"100%"
  },
  postCard:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  statisticCard: {
    flexDirection: "row",
    gap: 24,
  },
  card:{
    marginTop: 33,
  },
  namePhoto:{
    marginTop:8,
    marginBottom:8,
    fontSize:16,
    fontWeight:500,
  },
});
