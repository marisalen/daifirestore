import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyATtzu6yvZBsnAnR6h3u2_2FNoFoyQSWWQ",
  authDomain: "firestore1-c9776.firebaseapp.com",
  projectId: "firestore1-c9776",
  storageBucket: "firestore1-c9776.appspot.com",
  messagingSenderId: "732428271213",
  appId: "1:732428271213:web:bb622c0ea6f7d78db5c964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();
const db = getFirestore(app);
const analytics = getAnalytics(app);
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});