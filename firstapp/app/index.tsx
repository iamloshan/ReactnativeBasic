import { Text, View,ImageBackground} from "react-native";

export default function Index() {
  return (
    <ImageBackground source={require("../assets/images/loshan.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        opacity:0.5,
      }}
    >
      <Text
      style={{
        fontSize: 50,
      }}
      >
        hello Loshan..!!</Text>
    </ImageBackground>
  );
}
