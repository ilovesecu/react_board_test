import React from 'react';
import {Menu, MenuList} from "../../redux/types/MenuType";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

interface MenuListProps {
    menus: MenuList,
    open:boolean,
    navigate:(url:string)=>void,
}

const MenuListComponent = ({menus,open,navigate}:MenuListProps) => {
    const sxStyle = {
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
    }
    const sxIconStyle = {
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
    }
    const sxTextStyle = {
        opacity: open ? 1 : 0
    }
    const onMenuClick = () => {
        navigate('/articles')
    }

    return (
        <>
            {menus.map((menu:Menu) => (
                <ListItem key={menu.id} disablePadding sx={{ display: 'block' }} onClick={onMenuClick}>
                    <ListItemButton sx={sxStyle}>
                        <ListItemIcon sx={sxIconStyle}>
                            {menu.icon}
                        </ListItemIcon>
                        <ListItemText primary={menu.name} sx={sxTextStyle} />
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
};

export default MenuListComponent;