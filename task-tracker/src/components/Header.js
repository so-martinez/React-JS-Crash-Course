//first letter on uppercase is a convention for components
//this used to be required but not anymore: import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
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
