import { FC, useState } from 'react';
import styles from '../styles/TextInput.module.css';

interface TextInputProps {
    title: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    name?: string;
    required?: boolean;
    defaultValue?: string;
}

const TextInput: FC<TextInputProps> = ({
    title,
    placeholder,
    disabled,
    onChange,
    value,
    className,
    type = 'text',
    name,
    required,
    defaultValue,
}) => {
    const [focused, setFocused] = useState<boolean>(!!defaultValue || !!value);
    const [empty, setEmpty] = useState<boolean>(!defaultValue && !value);
    const [neverFocused, setNeverFocused] = useState<boolean>(!defaultValue);
    return (
        <div className={`${styles.inputContainer} ${className}`}>
            <label className={`${styles.input}`}>
                <input
                    title={title}
                    type={type}
                    className={`${styles.inputField} `}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={(e) => {
                        onChange && onChange(e);
                        if (e.target.value === '') setEmpty(true);
                        else {
                            setEmpty(false);
                            if (neverFocused) {
                                setNeverFocused(false);
                                setFocused(true);
                            }
                        }
                    }}
                    value={value}
                    onFocus={() => {
                        setFocused(true);
                        setNeverFocused(false);
                    }}
                    onBlur={() => setFocused(!empty)}
                    name={name}
                    required={required}
                />
                <span
                    className={`${styles.inputLabel} ${
                        focused ? styles.focused : ''
                    }`}
                >
                    {placeholder}
                </span>
            </label>
        </div>
    );
};

export default TextInput;
