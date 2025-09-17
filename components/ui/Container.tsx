import { useWeather } from "@/context/WeatherContext";
import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../styles/Container.styles";

const images: Record<number, any> = {
  0: require("../../assets/images/code-0.png"),
  1: require("../../assets/images/code-1.png"),
  2: require("../../assets/images/code-2.png"),
  3: require("../../assets/images/code-3.png"),
  45: require("../../assets/images/code-45.png"),
  48: require("../../assets/images/code-48.png"),
  51: require("../../assets/images/code-51.png"),
  53: require("../../assets/images/code-53.png"),
  55: require("../../assets/images/code-55.png"),
  61: require("../../assets/images/code-61.png"),
  63: require("../../assets/images/code-63.png"),
  65: require("../../assets/images/code-65.png"),
  71: require("../../assets/images/code-71.png"),
  73: require("../../assets/images/code-73.png"),
  75: require("../../assets/images/code-75.png"),
  95: require("../../assets/images/code-95.png"),
};

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  const { weatherData } = useWeather();

  const bgImageCode = weatherData?.current_weather?.weathercode;
  let backgroundImage;

  if (bgImageCode === undefined) {
    backgroundImage = require("../../assets/images/fond.png");
  } else {
    backgroundImage =
      images[bgImageCode] || require("../../assets/images/fond.png");
  }

  const content = (
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {content}
    </ImageBackground>
  );
}
