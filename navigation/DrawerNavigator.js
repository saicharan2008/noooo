import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import ChatProfile from '../screens/ChatProfile';
import MeetProfile from '../screens/MeetProfile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
       <Drawer.Screen name="Chat Profile" component={ChatProfile} />
      <Drawer.Screen name="Meet Profile" component={MeetProfile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
