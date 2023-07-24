import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Tabs = createBottomTabNavigator();

function Home() {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerTitleAlign: "center",

        headerStyle: {
          borderBottomWidth: 1,
        },

        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",

        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
          paddingHorizontal: 82,
          borderTopWidth: 1,
        },

        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: {
            display: "none",
          },
          title: "Створити публікацію",
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Feather name="arrow-left" size={24} color="#212121" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
export default Home;
