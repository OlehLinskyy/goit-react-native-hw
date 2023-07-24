import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

function PostsScreen() {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={require("../images/Rectangle1.png")}
          />
        </View>
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>e-mail@example.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 34,
    paddingLeft: 16,
  },
  avatar: {
    maxWidth: 60,
    maxHeight: 60,
    borderRadius: 16,
  },
  userName: {
    fontWeight: 700,
    fontSize: 13,
    color: "#212121",
  },
  userEmail: {
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
  scroll: {
    backgroundColor: "#FFFFFF",
  },
});
