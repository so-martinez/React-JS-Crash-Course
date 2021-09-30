//uppercase H is a convention for components
//this used to be required but not anymore: import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1 style={{color:'red', backgroundColor: 'black'}}>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task tracker',
}

Header.propTypes = {
    title: PropTypes.string,
    //if it's required: Proptypes.string.isRequired
}

export default Header
