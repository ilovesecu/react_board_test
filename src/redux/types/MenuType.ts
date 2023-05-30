import SvgIcon, {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import React, {ReactElement} from "react";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export type Menu = {
    id:number;
    name:string;
    link:string;
    icon:ReactElement;
}

export type MenuList = Menu[];