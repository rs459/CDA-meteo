import React from "react";
import { StyleSheet, Text, View } from "react-native";
import formatDate from "../../utils/convertDate";

interface WeatherSunsetProps {
  sunset: string;
}

const WeatherSunset = ({ sunset }: WeatherSunsetProps) => {
  const formattedDate = formatDate(sunset);

  return (
    <View>
      <Text style={styles.text}>Couché: {formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#ffffffec",
  },
});

export default WeatherSunset;
