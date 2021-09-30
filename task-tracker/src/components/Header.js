//first letter on uppercase is a convention for components
//this used to be required but not anymore: import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello'/>
            <Button color='blue' text='Hello 1'/>
            <Button color='magenta' text='Hello 2'/>
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
