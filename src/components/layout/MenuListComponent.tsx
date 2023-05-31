import React from 'react';
import {Menu, MenuList} from "../../redux/types/MenuType";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

interface MenuListProps {
    menus: MenuList,
    open:boolean,
    navigate:(url:string)=>void,
    isDivider:boolean
}

function getSxStyles(open:boolean){
    return {
        sxStyle:{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
        },
        sxIconStyle : {
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
        },
        sxTextStyle: {
            opacity: open ? 1 : 0
        }
    }
}

const MenuListComponent = ({menus,open,navigate,isDivider}:MenuListProps) => {
    const sxStyles = getSxStyles(open);
    const onMenuClick = (url:string) => {
        navigate(url)
    }
    return (
        <>
            {isDivider && <Divider />}
            {menus.map((menu:Menu) => (
                <ListItem key={menu.id} disablePadding sx={{ display: 'block' }} onClick={()=>onMenuClick(menu.link)}>
                    <ListItemButton sx={sxStyles.sxStyle}>
                        <ListItemIcon sx={sxStyles.sxIconStyle}>
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={menu.name} sx={sxStyles.sxTextStyle} />
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
};

export default MenuListComponent;