import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import AntDesign from "@expo/vector-icons/AntDesign";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

const logoPath = require("../assets/images/penguinChat.png");
const placeholderImage = require("../assets/images/user.png");

export default function Index() {
  const [getImage, setImage] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <GestureHandlerRootView style={styles.outerContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.container}>
            <View style={styles.headerWrapper}>
              <Image source={logoPath} style={styles.logoImg} />
              <View style={styles.headerWrapperInner}>
                <Text style={styles.headingText}>Create Account</Text>
                <Text style={styles.captionText}>
                  Hello! Welcome to SmartChat
                </Text>
              </View>
            </View>

            <Pressable
              style={styles.imgUploadBtn}
              onPress={async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                  mediaTypes: ImagePicker.MediaTypeOptions.All,
                  allowsEditing: true,
                  aspect: [1, 1],
                  quality: 1,
                });

                console.log(result);

                if (!result.canceled) {
                  setImage(result.assets[0].uri);
                }
              }}
            >
              <Image
                source={getImage ? { uri: getImage } : placeholderImage}
                style={styles.profileImg}
              />
            </Pressable>
            <Text style={styles.profileImgCaption}>Click image to upload</Text>

            <View style={styles.inputWrapper}>
              <TouchableWithoutFeedback
                onPress={() => {}}
                style={styles.innerContainer}
              >
                <Text style={styles.labelText}>Mobile</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your mobile number"
                />
                <Text style={styles.labelText}>First Name</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your first name"
                />
                <Text style={styles.labelText}>Last Name</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your last name"
                />
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />
              </TouchableWithoutFeedback>
            </View>
            <Pressable
              style={styles.actionBtn}
              onPress={() => {
                Alert.alert("SignUp");
              }}
            >
              <Text style={styles.actionBtnText}>SignUp</Text>
            </Pressable>

            <Button
              title="Already have an Account? SignIn"
              color={"red"}
              onPress={() => {
                Alert.alert("SignIn");
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
  },
  innerContainer: {
    alignItems: "flex-start",
    // flex: 1,
    minWidth: "100%",
    paddingHorizontal: 35,
  },
  headerWrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
  },
  headerWrapperInner: {
    marginLeft: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#372b0110",
    paddingBottom: 10,
  },
  logoImg: {
    width: 100,
    height: 100,
  },
  headingText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 32,
    marginTop: 20,
  },
  captionText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    opacity: 0.6,
    marginTop: 10,
  },
  inputWrapper: {
    width: "100%",
    paddingHorizontal: 25,
  },
  labelText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
    marginTop: 30,
  },
  inputField: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#414040",
    width: "100%",
  },
  actionBtn: {
    backgroundColor: "#ffc400",
    // width: "100%",
    marginTop: 50,
    marginBottom: 25,
    paddingVertical: 15,
    paddingHorizontal: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  actionBtnText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
  },
  imgUploadBtn: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "#372b0110",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  profileImgCaption: {
    fontSize: 12,
    marginTop: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
