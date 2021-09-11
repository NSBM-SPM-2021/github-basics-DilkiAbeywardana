import React from 'react';

import * as icons from 'react-icons/ai';


export const sideBarData = [
{
    tab_name: 'Home',
    redirect_path: '/',
    icon: <icons.AiFillHome/>,
    cName: 'nav-text'
},
{  
    tab_name: 'Books',
    redirect_path: '/Books',
    icon: <icons.AiFillRead/>,
    cName: 'nav-text'
},
{
    tab_name: 'Memebers',
    redirect_path: '/Members',
    icon: <icons.AiOutlineTeam/>,
    cName: 'nav-text'
}
]

export default sideBarData;