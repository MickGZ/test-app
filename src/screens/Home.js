import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  const goToMyPlan = () => {
    navigation.navigate("MyPlan");
  };

  const goToClaims = () => {
    navigation.navigate("Claims");
  };

  const goToDocuments = () => {
    navigation.navigate("Documents");
  };

  const goToNovaCard = () => {
    navigation.navigate("NovaCard");
  };

  return (
    <View>
      <Text style={styles.headerUser}>Hi Steven,</Text>
      <Text style={styles.headerGreeting}>Welcome Back</Text>
      <TextInput
        style={styles.inputTextBar}
        placeholder="Search for claims and documents"
      />
      <View>
        <View style={styles.spacing}>
          <View>
            <View style={styles.bgStyles}>
              <Pressable style={styles.buttonMenu} onPress={goToMyPlan}>
                <Text>My Plan</Text>
              </Pressable>
            </View>
            <View style={styles.bgStyles}>
              <Pressable style={styles.buttonMenu} onPress={goToClaims}>
                <Text>Claims</Text>
              </Pressable>
            </View>
          </View>
          <View>
            <View style={styles.bgStyles}>
              <Pressable
                title="Documents"
                style={styles.buttonMenu}
                onPress={goToDocuments}
              >
                <Text>Documents</Text>
              </Pressable>
            </View>
            <View style={styles.bgStyles}>
              <Pressable
                title="Nova Card"
                style={styles.buttonMenu}
                onPress={goToNovaCard}
              >
                <Text>Nova Card</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#1E1E1E",
  },
  headerUser: {
    fontSize: 20,
    paddingTop: 15,
    paddingLeft: 30,
  },
  headerGreeting: {
    color: "#959595",
    fontSize: 20,
    paddingLeft: 30,
  },
  inputTextBar: {
    backgroundColor: "white",
    color: "black",
    width: "90%",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 50,
  },
  bgStyles: {
    width: 140,
    height: 140,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  buttonMenu: {
    backgroundColor: "white",
    color: "black",
    width: 120,
    height: 120,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
