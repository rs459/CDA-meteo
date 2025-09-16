import formatDate from "@/utils/convertDate";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface WeatherSunriseProps {
  sunrise: string;
}

const WeatherSunrise = ({ sunrise }: WeatherSunriseProps) => {
  const formattedDate = formatDate(sunrise);

  return (
    <View>
      <Text style={styles.text}>Levé: {formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#ffffffec",
  },
});

export default WeatherSunrise;
