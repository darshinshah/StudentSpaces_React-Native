import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  AppRegistry,
  ScrollView,
} from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome To</Text>
        <Text style={styles.title}>Student Spaces</Text>
        <Text style={styles.text}>Please Login to Continue</Text>
        <Text style={styles.text}>OR</Text>
        <Text style={styles.text}>Register to kick start your journey</Text>
        <View style={styles.button}>
          <Button onPress={() => navigate('Login')} title="Login" />
        </View>
        <View style={styles.button}>
          <Button onPress={() => navigate('SignUp')} title="Sign Up" />
        </View>
      </View>
    );
  }
}

class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>
        <Text style={styles.text}>Please Login to Continue</Text>
        <TextInput style={styles.email} placeholder="Email" />
        <TextInput style={styles.pswd} placeholder="Password" />

        <View style={styles.button1}>
          <Button onPress={() => navigate('LogScreen')} title="Login" />
        </View>
        <View style={styles.button2}>
          <Button onPress={() => navigate('Forgot')} title="Forgot Password" />
        </View>
      </View>
    );
  }
}

class SignUp extends Component {
  static navigationOptions = {
    title: 'SignUp',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Registration Page</Text>
        <Text style={styles.text}>Please fill up to Continue</Text>
        <TextInput style={styles.uname} placeholder="Enter Username" />
        <TextInput style={styles.phone} placeholder="Enter Phone Number" />
        <TextInput style={styles.email} placeholder="Enter Email" />
        <TextInput style={styles.pswd} placeholder="Enter Password" />
        <Text style={styles.text}>Generate OTP </Text>
        <TextInput style={styles.otp} placeholder="Enter the received OTP" />
        <View style={styles.button1}>
          <Button onPress={() => navigate('Login')} title="Sign Up" />
        </View>
      </View>
    );
  }
}

class ForgotPassword extends Component {
  static navigationOptions = {
    title: 'Forgot',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Enter Email address to send reset password link
        </Text>
        <TextInput style={styles.email} placeholder="Email" />
        <View style={styles.button1}>
          <Button onPress={() => navigate('Profile')} title="SEND EMAIL" />
        </View>
      </View>
    );
  }
}

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.button1}>
          <Button onPress={() => navigate('Login')} title="WORK DONE!" />
        </View>
      </View>
    );
  }
}

class LogScreen extends Component {
  static navigationOptions = {
    title: 'Log',
  };
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.att}>
          <Button title="ATTENDANCE" />
        </View>
        <View style={styles.att}>
          <Button title="TIMETABLE" />
        </View>
        <View style={styles.att}>
          <Button title="WIFI" />
        </View>
        <View style={styles.att}>
          <Button title="PROFILE SETTINGS" />
        </View>
        <View style={styles.att}>
          <Button title="LOGOUT" />
        </View>
        <View style={styles.att}>
          <Button title="MORE BUTTON" />
        </View>
        <View style={styles.att}>
          <Button title="MORE BUTTON" />
        </View>
        <View style={styles.att}>
          <Button title="SOME MORE BUTTON" />
        </View>
        <View style={styles.att}>
          <Button title="FEW BUTTON" />
        </View>
        <View style={styles.att}>
          <Button title="A FEW MORE BUTTON" />
        </View>
        <View style={styles.att}>
          <Button title="SOME" />
        </View>
        <View style={styles.att}>
          <Button title="ABOUT TO END" />
        </View>

      </ScrollView>
    );
  }
}

const NavigationApp = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Forgot: { screen: ForgotPassword },
    LogScreen: { screen: LogScreen },
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight,
      },
    },
  }
);

export default class App extends Component {
  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89C8F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    backgroundColor: '#89C8F9',
  },
  welcome: {
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  title: {
    margin: 5,
    padding: 5,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  button: {
    margin: 6,
  },
  text: {
    flex: 0,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
  uname: {
    margin: 1,
    height: 40,
    width: 250,
  },
  phone: {
    margin: 1,
    height: 40,
    width: 250,
  },
  email: {
    margin: 1,
    height: 40,
    width: 250,
  },
  pswd: {
    margin: 1,
    height: 40,
    width: 250,
  },
  otp: {
    margin: 1,
    height: 40,
    width: 250,
  },
  button1: {
    margin: 6,
  },
  button2: {
    margin: 6,
  },
  att: {
    margin: 10,
    color: '#FF9900',
    backgroundcolor: '#89C8F9',
  },
});

AppRegistry.registerComponent('ReactNavigation', () => NavigationApp);
