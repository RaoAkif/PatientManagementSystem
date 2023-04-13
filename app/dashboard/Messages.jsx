import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import tw from "../../utils/tailwind";
import BottomTabHeader from "../../components/BottomTabHeader";
import MessageCard from "../../components/MessageCard";

export default function Messages() {
  const [selected, setSelected] = useState("unread");

  const tabClicked = (tabName) => {
    setSelected(tabName);
  };
  return (
    <View style={tw.style(" flex-1 bg-white pt-10")}>
      <View style={tw.style("px-5")}>
        <BottomTabHeader title="Messages" />
      </View>

      <View style={tw.style("flex-1 mt-5")}>
        <View style={tw.style("px-5 flex-row")}>
          <Pressable
            onPress={() => tabClicked("unread")}
            accessibilityLabel="Learn more"
            style={tw.style(
              `flex-1 py-3 my-2 rounded-3xl  -mr-5  ${
                selected === "unread" ? "border-2  bg-white  border-gray-100 z-10" : " bg-gray-100"
              }`
            )}
          >
            <Text
              style={tw.style(
                ` text-center font-InterBold text-base ${selected === "unread" ? "text-customBlack" : "text-gray-500"}`
              )}
            >
              Unread(4)
            </Text>
          </Pressable>

          <Pressable
            onPress={() => tabClicked("read")}
            accessibilityLabel="Learn more"
            style={tw.style(
              `flex-1 py-3 my-2 rounded-3xl -ml-5 ${
                selected === "read" ? " border-2  border-gray-100 bg-white z-10" : " bg-gray-100"
              }`
            )}
          >
            <Text
              style={tw.style(
                `font-InterBold text-center text-base ${selected === "read" ? "text-customBlack" : "text-gray-500"}`
              )}
            >
              Read
            </Text>
          </Pressable>
        </View>
        <View style={tw.style("flex-1 mt-2")}>
          {selected === "unread" ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <MessageCard
                name="John Doe"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="Simon Says"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="John Wick"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="Labrador"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="Labrador"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="Labrador"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="Labrador"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="Labrador"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="Labrador"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
            </ScrollView>
          ) : (
            <ScrollView showsVerticalScrollIndicator={false}>
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
              <MessageCard
                name="READ READ"
                message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                date=""
                avatarImg={require("../../assets/images/profile.png")}
              />
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
}
