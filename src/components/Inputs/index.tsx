import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name: string
    input: string
}

const Input: React.FC<InputProps> = ({ label, name, input, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type={input} id={name} {...rest} />
        </div>
    )
}

export default Input;