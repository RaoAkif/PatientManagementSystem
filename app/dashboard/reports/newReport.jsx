import { View, Text } from "react-native";
import React, { useState } from "react";
import tw from "../../../utils/tailwind";
import BottomTabHeader from "../../../components/BottomTabHeader";
import { Button, List, TextInput, TouchableRipple } from "react-native-paper";
import * as DocumentPicker from "expo-document-picker";

export default function newReport() {
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  const getFile = () => {
    DocumentPicker.getDocumentAsync().then((result) => {
      if (result.type == "success") {
        setFiles([
          ...files,
          {
            name: result.name,
            uri: result.uri,
          },
        ]);
      }
    });
  };

  return (
    <View style={tw.style(" flex-1 bg-white pt-10")}>
      <View style={tw.style("px-5")}>
        <BottomTabHeader title="New Report" />
      </View>

      <View style={tw.style("mt-10 mx-5")}>
        <TextInput label="Title" mode="outlined" value={text} onChangeText={(text) => setText(text)} />

        {files.map((file, index) => (
          <List.Item
            key={index}
            title={file.name}
            description="Item description"
            left={(props) => <List.Icon {...props} icon="file" />}
            right={(props) => <List.Icon {...props} icon="close" />}
            onPress={() => setFiles([...files.slice(0, index), ...files.slice(index + 1)])}
          />
        ))}

        <TouchableRipple
          onPress={getFile}
          style={tw.style("bg-customPurple p-4 mt-2 items-center rounded")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text style={tw.style("text-white")}>Pick File</Text>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => console.log("save")}
          style={tw.style("bg-customPurple p-4 mt-2 items-center rounded")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text style={tw.style("text-white")}>Save</Text>
        </TouchableRipple>
      </View>
    </View>
  );
}
