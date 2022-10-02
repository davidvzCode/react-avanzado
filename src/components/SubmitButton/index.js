import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ onClick, text, disabled = false }) => {
    return (
        <Button disabled={disabled} onClick={onClick}>
            {text}
        </Button>
    )
}
SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    // children: PropTypes.node.isRequired,
}
