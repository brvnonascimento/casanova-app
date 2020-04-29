import React from 'react'
import './styles.css'

interface Props {
    text: string;
    targeting: string;
}

export const Label: React.FC<Props> = ({text, targeting}) => {
    return(
        <label >
            {text}
        </label>
    )
} 