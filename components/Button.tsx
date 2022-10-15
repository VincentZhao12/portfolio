import React, { FC } from 'react';
import styles from '../styles/Button.module.css';
import Spinner from './Spinner';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?:
        | 'primary'
        | 'secondary'
        | 'tertiary'
        | 'fourth'
        | 'fifth'
        | 'primary-outline'
        | 'secondary-outline'
        | 'tertiary-outline'
        | 'fourth-outline'
        | 'fifth-outline';
    className?: string;
    fullWidth?: boolean;
    id?: string;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    onMouseDown?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    disabled,
    variant,
    className,
    fullWidth,
    id,
    type = 'button',
    loading,
    onMouseDown,
}) => {
    return (
        <button
            onClick={() => {
                onClick && onClick();
            }}
            disabled={disabled || loading}
            className={`${styles.button} ${variant ? styles[variant] : ''} ${
                fullWidth ? styles.fullWidth : ' '
            } ${className}`}
            id={id}
            type={type}
            onMouseDown={onMouseDown}
        >
            {loading ? <Spinner /> : <span>{children}</span>}
        </button>
    );
};

export default Button;
