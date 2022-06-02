import * as IoIcons from 'react-icons/io';
import * as IconName  from "react-icons/fc";

import React from 'react';

const NavbarData = [
    {
        title:'Home',
        path:'home',
        icon: <IconName.FcHome />,
        cName: 'nav-text'
    },
    {
        title:'Report',
        path:'reports',
        icon: <IconName.FcComboChart />,
        cName: 'nav-text'
    },
    {
        title:'Products',
        path:'products',
        icon: <IconName.FcBriefcase />,
        cName: 'nav-text'
    },
    {
        title:'Team',
        path:'team',
        icon: <IconName.FcCollaboration />,
        cName: 'nav-text'
    },
    {
        title:'Messages',
        path:'messages',
        icon: <IconName.FcInvite />,
        cName: 'nav-text'
    },
    {
        title:'Support',
        path:'support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]

export default NavbarData;