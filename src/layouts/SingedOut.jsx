import React, { useState } from 'react'
import { Button, Menu, Dropdown, Input } from 'semantic-ui-react'


export default function SingedOut({ singIn }) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleOpen(params) {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <div>
            <Menu.Item>
                <Dropdown
                    trigger={<Button primary onClick={handleOpen}>Giriş yap</Button>}
                    open={isDropdownOpen}
                    icon={null}
                >
                    <Dropdown.Menu>
                        <Input placeholder='User Name' />
                        <Input placeholder='Password'/>
                        <Dropdown.Item text="Giriş Yap" style={{textAlign:"center"}}  onClick={singIn}/>
                    </Dropdown.Menu>
                </Dropdown>

                <Button primary style={{ marginLeft: '0.5em' }}>Kayıt ol</Button>
            </Menu.Item>
        </div>
    )
}
 