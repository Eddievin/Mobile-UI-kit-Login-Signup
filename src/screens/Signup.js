import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import Colors from "../colors/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

const Home = () => {
  // State variable to hold the password
  const [password, setPassword] = useState("");

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // Checkbox
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.pageHeader}>
        <TouchableOpacity><MaterialCommunityIcons style={styles.icon} name="close"  /></TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
          <TouchableOpacity><Text style={styles.loginText}>Login</Text></TouchableOpacity>
        </View>
      </SafeAreaView>

      <View>
        <TextInput style={styles.inputName} placeholder="Name" />
        <TextInput style={styles.inputEmail} placeholder="Email" />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Text style={styles.showText}>{"showPassword" ? "Show" : "Hide"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.agreeContainer}>
        <CheckBox
          style={styles.checkbox}
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? Colors.greenPrimary : undefined}
        />
        <Text style={styles.agreeText}>
          I would like to receive your newsletter and other promotional
          information.
        </Text>
      </View>

      

      <View style={styles.signupContainer}>
        <TouchableOpacity
          style={styles.btnSignup}
       
          onPress={() => {
            /* Do something */
          }}
        >
          <Text style={styles.btnSignupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  //Header
  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
  },
  icon:{
    color:"#aaa",
    fontSize:30,
  },
  signUpText: {
    fontWeight: "bold",
    fontSize: 35,
  },
  loginText: {
    color: Colors.greenPrimary,
    fontSize: 17,
  },

  //TextInputs
  inputName: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.gray01,
    borderColor: Colors.gray02,
    borderRadius: 10,
    fontWeight: "500",
    fontSize: 18,
  },

  inputEmail: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: Colors.gray01,
    borderColor: Colors.gray02,
    borderRadius: 10,
    fontWeight: "500",
    fontSize: 18,
  },

  passwordContainer: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.gray01,
    borderColor: Colors.gray02,
    borderRadius: 8,
    paddingHorizontal: 14,
  },

  inputPassword: {
    flex: 1,
    backgroundColor: Colors.gray01,
    paddingVertical: 10,
    paddingRight: 10,
    borderColor: Colors.gray02,
    fontSize: 18,
    fontWeight: "500",
  },

  showText: {
    marginLeft: 2,
    color: Colors.greenPrimary,
    fontSize: 17,

  },

  //Agree section
  agreeContainer: {
    flexDirection: "row",
    margin: 20,
  },

  checkbox: {
    borderColor: Colors.gray02,
    borderRadius: 5,
    backgroundColor: Colors.gray01,
    borderWidth: 1,
  },

  agreeText: {
    color: Colors.gray04,
    marginLeft: 10,
    fontSize: 15,
  },

  //sign up button

  signupContainer: {
    justifyContent: "center",
    alignItems: "center",
   
  },
  btnSignup: {
    backgroundColor: Colors.greenPrimary,
    height: 60,
    width: "95%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSignupText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  //forgot password
  forgotPasswordContainer: {
    alignItems: "center",
    margin:10,
  },
  forgotPasswordText: {
    color: Colors.greenPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Home;
