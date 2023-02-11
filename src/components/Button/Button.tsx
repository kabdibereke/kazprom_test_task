import React from 'react'
import { IButtonProps } from './Button.props'
import cn from 'classnames';
import styles from './Button.module.scss'
const Button = ({ types, children, className, ...props }: IButtonProps) => {
  return (
    <button
    className={cn(styles.button, className, {
        [styles.del]: types == 'del',
        [styles.add]: types == 'add',
        [styles.delItem]: types == 'delItem',
        [styles.test]: types == 'test',
    })}
    {...props}
    >
    {children}

    </button>
  )
}

export default Button