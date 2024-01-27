import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; // Import the CSS module

// Define a PropTypes interface for the props
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color: 'blue' | 'black';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, color }) => {
    const buttonClasses = `${styles.button} ${styles[color]}`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
