import { View, Text, Button, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.spacing}>
        <View>
          <View style={styles.bgStyles}>
            <Button
              title="My Plan"
              style={styles.buttonContainer}
              onPress={goToMyPlan}
            />
          </View>
          <View style={styles.bgStyles}>
            <Button
              title="Claims"
              style={styles.buttonContainer}
              onPress={goToClaims}
            />
          </View>
        </View>
        <View>
          <View style={styles.bgStyles}>
            <Button
              title="Documents"
              style={styles.buttonContainer}
              onPress={goToDocuments}
            />
          </View>
          <View style={styles.bgStyles}>
            <Button
              title="Nova Card"
              style={styles.buttonContainer}
              onPress={goToNovaCard}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 150,
  },
  bgStyles: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flex: 1,
    width: "50%",
    height: "50%",
  },
});

export default Home;
