import React from "react";
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { AccountCircle } from "@mui/icons-material";
const features = [
  {
    uri: "/settings/referal",
    label: "Refer a Friend",
    type: "nav-item",
    icon: <GroupAddOutlinedIcon />
  },
  {
    uri: "/settings",
    label: "Settings",
    type: "nav-item",
    icon: <SettingsOutlinedIcon />
  },
  {
    uri: "/notifications",
    label: "Notifications",
    type: "nav-item",
    icon: <NotificationsActiveOutlinedIcon />
  },
  {
    uri: "/help",
    label: "Help center",
    type: "nav-item",
    icon: <HelpOutlineOutlinedIcon />
  },
  {
    uri: "/account&bills",
    label: "Account & billing",
    type: "nav-item",
    icon: <PercentOutlinedIcon/>
  },
  {
    uri: "/settings/user",
    label: "User settings",
    type: "nav-item",
    icon: <PersonOutlineOutlinedIcon />
  },
  {
    uri: "/settings/account",
    label: "Account settings",
    type: "nav-item",
    icon: <ManageAccountsOutlinedIcon />
  }
];

export default features;
