import * as IoIcons from 'react-icons/io';
import * as IconName  from "react-icons/fc";

import React from 'react';

const NavbarData = [
    {
        title:'Home',
        path:'/main',
        icon: <IconName.FcHome />,
        cName: 'nav-text'
    },
    {
        title:'Report',
        path:'/main/reports',
        icon: <IconName.FcComboChart />,
        cName: 'nav-text'
    },
    {
        title:'Products',
        path:'/main/products',
        icon: <IconName.FcBriefcase />,
        cName: 'nav-text'
    },
    {
        title:'Team',
        path:'/main/team',
        icon: <IconName.FcCollaboration />,
        cName: 'nav-text'
    },
    {
        title:'Messages',
        path:'/main/messages',
        icon: <IconName.FcInvite />,
        cName: 'nav-text'
    },
    {
        title:'Support',
        path:'/main/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]

export default NavbarData;