import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/app/constants/enums'
import React from 'react'
import styles from "./Button.module.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: BUTTON_VARIANTS,
    size?: BUTTON_SIZES
}

const Button = ({
    children,
    variant = BUTTON_VARIANTS.Primary,
    size = BUTTON_SIZES.Small
}: ButtonProps) => {

    return (
        <button
            className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
        >
            {children}
        </button>
    )
}

export default Button