//uppercase H is a convention for components
//this used to be required but not anymore: import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header
