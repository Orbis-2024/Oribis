import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
export default function Challenges() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text>This is where the Challenges will be displayed</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
});
