//first letter on uppercase is a convention for components
//this used to be required but not anymore: import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
        const location = useLocation()

        return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />)}
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
