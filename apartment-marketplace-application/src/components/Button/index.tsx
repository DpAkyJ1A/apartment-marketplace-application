import React from 'react'
import styles from './index.module.css'

interface IProps {
  title: string,
  color?: 'green' | 'red' | 'blue' | '';
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const colors = {
  green: '#21BA99',
  red: '#F2323F',
  blue: '#364FC7'
}

export default function Button({ 
  title = '',
  color = '',
  className = '',
  onClick,
}: IProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
      style={{ backgroundColor: color ? colors[color] : 'gray' }}
    >
      {title}
    </button>
  )
}
