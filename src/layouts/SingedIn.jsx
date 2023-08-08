import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SingedIn({singOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src=""/>
            <Dropdown pointing="top left" text="Gorkem Koç">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgiler" />
                    <Dropdown.Item onClick={singOut} text="Çıkış Yap" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
