import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { login, logout } from "./slices/authSlice";

export default function AuthProvider() {
  const router = useRouter();
  const segments = useSegments();
  const inHomeGroup = segments[0] === "dashboard";
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn && !inHomeGroup) {
      router.replace("/dashboard");
    } else if (!isLoggedIn && inHomeGroup) {
      router.replace("/");
    }
    console.log(isLoggedIn);
  }, [isLoggedIn, segments]);

  return <Slot />;
}
