import React, {ReactElement} from "react";

export type Menu = {
    id:number;
    name:string;
    link:string;
    icon:ReactElement;
}

export type MenuList = Menu[];
export type MenuObj = {
    [key:number]:MenuList;
}