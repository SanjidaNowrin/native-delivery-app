import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Text from "./text/text";
import { colors } from "./../theme/colors";
import { spacing } from "./../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
export default function Item() {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../../assets/leaf.png")}></Image>
      {/* item */}
      <View style={styles.itemSection}>
        <Text preset="h1">Boston Lettuce</Text>
        <View style={styles.textPrice}>
          <Text preset="h2">1.10</Text>
          <Text
            preset="h3"
            style={{ color: colors.purple, paddingLeft: spacing[2] }}
          >
            € / piece
          </Text>
        </View>
        <Text preset="small" style={{ color: colors.green }}>
          ~ 150 gr / piece
        </Text>
        <Text preset="h3" style={{ marginTop: spacing[4] }}>
          Spain
        </Text>
        <Text style={{ marginTop: spacing[2] }}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <View style={styles.btnSection}>
          <Pressable style={styles.loveBtn}>
            <Image source={require("../../assets/Vector.png")}></Image>
          </Pressable>
          <Pressable style={styles.pressableBtn}>
            <View style={styles.btnSection}>
              <AntDesign name="shoppingcart" size={24} color="white" />
              <Text
                preset="h4"
                style={{ textAlign: "center", paddingLeft: spacing[2] }}
              >
                ADD TO CART
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  itemSection: {
    paddingTop: 30,
    height: "100%",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 20,
    backgroundColor: colors.grey,
    top: -40,
  },
  textPrice: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: spacing[2],
  },
  btnSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loveBtn: {
    backgroundColor: colors.white,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    borderRadius: 10,
    marginTop: spacing[5],
  },
  pressableBtn: {
    backgroundColor: colors.green,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[6],
    borderRadius: 10,
    marginTop: spacing[5],
  },
});
