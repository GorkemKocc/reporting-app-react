import React, {useState} from 'react'
import {Container, Menu } from 'semantic-ui-react'
import SingedIn from './SingedIn'
import SingedOut from './SingedOut'
import { useHistory} from "react-router"

export default function AddMenu() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    
    function handleSingOut(params) {
        setIsAuthenticated(false)

    }
    function handleSingIn(params) {
        setIsAuthenticated(true)
      
    }
    return (
        <div>
            
                <Menu inverted fixed="top">
                    <Container>
                    <Menu.Menu position="right">
                    {isAuthenticated?<SingedIn singOut={handleSingOut}/>:<SingedOut singIn={handleSingIn}/>}    
                    </Menu.Menu>
                     </Container>
                </Menu>
           
        </div>
    )
}
