import { View, Text, Button, Image, TextInput } from "react-native";
import { collection, getDocs, addDoc, setDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";


export default function Register(){

    const [fn, setFN] = useState("");
    const [age, setAge] = useState("");
    const [ava, setAva] = useState("");

    const AddUser = async () =>{
        const db = getFirestore();
        // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "users"), {
    fullname: fn,
    age: age,
    avatar: ava
  });
  console.log("Document written with ID: ", docRef.id);

    }
    return (
        <View>
            <TextInput placeholder="fullname" onChangeText={(txt)=>setFN(txt)}/>
            <TextInput placeholder="age" onChangeText={(txt)=>setAge(txt)}/>
            <TextInput placeholder="avatar" onChangeText={(txt)=>setAva(txt)}/>
            <Button title="add" onPress={()=>AddUser()}/>
        </View>
    )

}