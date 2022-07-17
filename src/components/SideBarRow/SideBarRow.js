import React from 'react';
import './SideBarRow.css';

const SideBarRow = ({selected, Icon, title}) => {
    return (
        <div className={`flex pointer items-center px-5 py-3 hover:cursor-pointer ${selected ? 'selected': ''} hover:bg-slate-300`}>
            <Icon className={`text-lg ${selected ? 'selectedcon': ''}`}/>
            <h2 className={`flex:1 font-medium ml-2.5 text-xs`}>{title}</h2>
        </div>
    )
}

export default SideBarRow;