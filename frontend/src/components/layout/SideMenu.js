import React from 'react'
import { SIDE_MENU_DATA } from '../../utils/data'

const SideMenu = ({activeMenu}) => {
    return (
        <div className=''>
            {SIDE_MENU_DATA.map((item)=>(
                <button>item.label</button>
            ))}
        </div>
    )
}

export default SideMenu
