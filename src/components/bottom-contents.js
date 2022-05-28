import { View, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";
export default function BottomContents() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <Text preset="h1" style={{ textAlign: "center", marginTop: spacing[4] }}>
        None-Contact Deliveries
      </Text>
      <Text style={styles.paraText}>
        When palcing an order, select the option "Contactless delivery" and
        their courier will leave your order at the door
      </Text>

      <Pressable
        style={styles.pressableBtn}
        onPress={() => {
          navigation.navigate("Item");
        }}
      >
        <Text preset="h4" style={{ textAlign: "center" }}>
          ORDER NOW
        </Text>
      </Pressable>
      <Pressable style={styles.dimmisBtn}>
        <Text preset="h4" style={{ textAlign: "center", color: "#A259FF" }}>
          DISMISS
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: spacing[5],
  },
  logo: {
    borderRadius: 50,
    padding: spacing[4],
    backgroundColor: colors.grey,
  },
  paraText: {
    textAlign: "center",
    marginVertical: spacing[3],
  },
  pressableBtn: {
    backgroundColor: colors.green,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    width: "100%",
    borderRadius: 10,
    marginTop: spacing[5],
  },
  dimmisBtn: {
    backgroundColor: colors.white,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    width: "100%",
    borderRadius: 10,
    marginTop: spacing[5],
  },
});
