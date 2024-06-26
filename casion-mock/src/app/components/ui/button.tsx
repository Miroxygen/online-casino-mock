"use client"


import { FC, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'large',
  ...props
}) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded focus:outline-none';
  const variantStyles = {
    primary: 'bg-green-700 text-white hover:bg-blue-700',
    secondary: 'bg-red-500 text-white hover:bg-red-700',
    danger: 'bg-red-500 text-white hover:bg-red-700',
  }
  const sizeStyles = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-10 py-3 text-lg'
  }

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button