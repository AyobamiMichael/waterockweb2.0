import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/userdetails',
    icon: <IoIcons.IoMdHome />,
    cName: 'nav-text'
  },
 {
    title: 'Add Pharmacy',
    path: '/registerpharmacy',
    icon: <IoIcons.IoIosAddCircleOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Add Product',
    path: '/registerproduct',
    icon: <IoIcons.IoMdMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/drugviewforpharmacy',
    icon: <IoIcons.IoMdGrid />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/pharmacyitems',
    icon: <IoIcons.IoMdGrid />,
    cName: 'nav-text'
  },

  {
    title: 'Support',
    path: '',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <IoIcons.IoMdLogOut />,
    cName: 'nav-text'
  }
];