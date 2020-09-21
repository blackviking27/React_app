import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring';
import NavigationMenu from './NavigationMenu'


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    //className="fixed bg-white top-0 left-0 w-1/4 h-full z-50 shadow"
    //mask className="bg-black bg-opacity-50 fixed top-0 left-0 z-50 w-full h-full"

    const masktransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menutransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1, transform: "translateX(0%)"},
        leave: { opacity: 0,  transform: "translateX(-100%)"},
    })

    return(
        <nav>
            <button 
                className="text-xs text-gray-600 text-bold"
                onClick={() => setShowMenu(!showMenu)}
                >
                    Menu
            </button>
        
            {
            masktransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                key={key} 
                style={props}
                className="bg-black bg-opacity-50 fixed top-0 left-0 z-50 w-full h-full"
                onClick={() => setShowMenu(false)}
                >
                </animated.div>
            )
        }
        
        {
            menutransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                key={key} 
                style={props}
                className="fixed bg-white top-0 left-0 w-1/4 h-full z-50 shadow p-3"
                >
                <NavigationMenu 
                    closeMenu={() => setShowMenu(false)}
                />
                </animated.div>
            )
        }

        </nav>
    )
}

export default Navigation;