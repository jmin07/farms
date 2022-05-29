import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as IconName  from "react-icons/fc";

import React from 'react';

export const NavbarData = [
    {
        title:'Home',
        path:'/',
        icon: <IconName.FcHome />,
        cName: 'nav-text'
    },
    {
        title:'Report',
        path:'/reports',
        icon: <IconName.FcComboChart />,
        cName: 'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon: <IconName.FcBriefcase />,
        cName: 'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon: <IconName.FcCollaboration />,
        cName: 'nav-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon: <IconName.FcInvite />,
        cName: 'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]