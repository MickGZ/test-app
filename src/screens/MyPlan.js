import { View, Text, StyleSheet } from "react-native";
import React from "react";

function MyPlan() {
  const marginSubtitle = { marginTop: 4, marginBottom: 8, ...styles.subTitle };

  return (
    <View>
      <View style={styles.infoContainer}>
        <View>
          <Text>FAM</Text>
          <Text style={marginSubtitle}>Plan Type</Text>
          <Text>02/04/2023</Text>
          <Text style={marginSubtitle}>Effective Date</Text>
          <Text>$100/$10,000</Text>
          <Text style={marginSubtitle}>Deductible</Text>
        </View>

        <View>
          <Text>PAF-1811-12000181</Text>
          <Text style={marginSubtitle}>Nova Member ID</Text>
        </View>
      </View>
      <View style={styles.infoPayment}>
        <View>
          <Text>$540.00</Text>
          <Text style={marginSubtitle}>Monthly Premium</Text>
        </View>

        <View>
          <Text>03/01/2023</Text>
          <Text style={marginSubtitle}>Next Payment</Text>
        </View>
      </View>
      <View style={styles.infoDependents}>
        <Text>Steven Anderson</Text>
        <Text>Teresa Lopez</Text>
        <Text>Richard Lopez</Text>
        <Text>Martin Lopez</Text>
        <Text style={marginSubtitle}>Members on Plan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 10,
  },
  identifyRows: {
    backgroundColor: "blue",
  },
  infoPayment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
    backgroundColor: "#FFFFFF",
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 10,
  },
  infoDependents: {
    backgroundColor: "#FFFFFF",
    marginLeft: 12,
    marginRight: 12,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 10,
    color: "#575757",
    fontSize: 14,
    fontWeight: 600,
  },
  subTitle: {
    color: "#686868",
  },
});

export default MyPlan;
