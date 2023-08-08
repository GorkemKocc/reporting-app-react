import React from 'react'
import { Input, Menu } from 'semantic-ui-react'


export default function Navi() {

    return (
        <div>
            <Menu vertical>
                
                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
                <Menu.Item>
                    Inbox
                </Menu.Item>

                <Menu.Item>
                    Spam
                </Menu.Item>

                <Menu.Item>
                    Updates
                </Menu.Item>
                

            </Menu>
        </div>
    )
}
